import { NextResponse } from 'next/server';
import { withTransaction, sql } from '@/lib/db';
import { getConfig } from '@/lib/bookingConfig';
import { 
  isWorkingDay, 
  generateSlots, 
  applyMinNotice, 
  parseTimeSlot,
  generateBookingRef,
  computeIdempotencyKey
} from '@/lib/bookingUtils';
import { generateIcs, generateGoogleCalendarUrl } from '@/lib/calendarUtils';
import { generateActionToken } from '@/lib/authUtils';
import { Resend } from 'resend';
import { after } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    console.log("[Booking API] Start processing request");
    const body = await req.json();
    const { service, date, time, name, email, phone, notes } = body;
    console.log("[Booking API] Received body:", { service, date, time, name, email, phone });

    // 1. Basic validation
    if (!service || !date || !time || !name || !email || !phone) {
      console.log("[Booking API] Validation failed: Missing required fields");
      return NextResponse.json(
        { success: false, code: 'VALIDATION_ERROR', message: 'Missing required fields' },
        { status: 400 }
      );
    }

    console.log("[Booking API] Fetching config...");
    const config = await getConfig();
    const normalizedTime = parseTimeSlot(time); // HH:MM
    console.log("[Booking API] Normalized time:", normalizedTime);

    // 2. Re-verify Server Side Rules (Do not trust client)
    console.log("[Booking API] Checking if working day...");
    const workingDay = await isWorkingDay(date, config, sql);
    if (!workingDay) {
      console.log("[Booking API] Failed: Not a working day");
      return NextResponse.json(
        { success: false, code: 'INVALID_DATE', message: 'Selected date is not available' },
        { status: 400 }
      );
    }

    console.log("[Booking API] Generating slots...");
    const allSlots = generateSlots(date, config);
    if (!allSlots.includes(normalizedTime)) {
      console.log("[Booking API] Failed: Invalid time slot");
      return NextResponse.json(
        { success: false, code: 'INVALID_TIME', message: 'Selected time slot is invalid' },
        { status: 400 }
      );
    }

    console.log("[Booking API] Applying min notice filter...");
    const validSlots = applyMinNotice(allSlots, date, config);
    if (!validSlots.includes(normalizedTime)) {
      console.log("[Booking API] Failed: Booking too soon");
      return NextResponse.json(
        { success: false, code: 'BOOKING_TOO_SOON', message: `Appointments require at least ${config.minNoticeHours} hours notice` },
        { status: 400 }
      );
    }

    // 3. Idempotency Check
    console.log("[Booking API] Computing idempotency key...");
    const idempotencyKey = computeIdempotencyKey(email, date, time);
    
    // Check if we already processed this
    console.log("[Booking API] Checking idempotency against DB...");
    const existingReq = await sql`
      SELECT booking_ref FROM bookings WHERE idempotency_key = ${idempotencyKey}
    `;
    if (existingReq.length > 0) {
      console.log("[Booking API] Idempotency matched, returning existing ref");
      // Replay success response
      return NextResponse.json({ 
        success: true, 
        bookingRef: existingReq[0].booking_ref, 
        idempotent: true 
      });
    }

    console.log("[Booking API] Generating booking ref...");
    const bookingRef = generateBookingRef(date, config.bookingRefPrefix);

    // 4. Atomic Database Transaction
    console.log("[Booking API] Starting DB transaction...");
    let txResult;
    try {
      txResult = await withTransaction(async (client) => {
        console.log("[Booking API] Executing INSERT...");
        const res = await client.query(`
          INSERT INTO bookings (booking_ref, service, slot_date, slot_time, name, email, phone, notes, idempotency_key)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
          RETURNING id
        `, [bookingRef, service, date, normalizedTime, name, email, phone, notes, idempotencyKey]);
        console.log("[Booking API] INSERT completed");
        return res;
      });
    } catch (err) {
      // 23505 is PostgreSQL unique_violation.
      // This happens if the slot is taken OR if the idempotency key is a duplicate.
      if (err.code === '23505') {
        console.log("[Booking API] Duplicate booking prevented (unique violation):", err.constraint);
        txResult = { rowCount: 0 };
      } else {
        throw err; // Re-throw 42P10 or other unexpected errors
      }
    }

    if (txResult.rowCount === 0) {
      console.log("[Booking API] Failed: Slot taken (txResult.rowCount === 0)");
      // Conflict occurred, slot taken
      return NextResponse.json(
        { success: false, code: 'SLOT_TAKEN', message: 'This slot was just booked. Please choose another time.' },
        { status: 409 }
      );
    }
    
    console.log("[Booking API] Transaction successful. Returning response.");

    // 5. Success! The booking is securely locked in the DB.
    
    // Queue non-critical tasks (Emails & Calendar) after the response is sent.
    // We use Next.js `after` to ensure Vercel doesn't kill the function immediately.
    // And wrap in try-catch so it never fails the user booking.
    const runAsyncTasks = async () => {
      try {
        const bookingData = { booking_ref: bookingRef, service, slot_date: date, slot_time: normalizedTime, name, email, phone, notes };
        
        const icsContent = generateIcs(bookingData, config);
        const gcalUrl = generateGoogleCalendarUrl(bookingData, config);
        const cancelToken = await generateActionToken(bookingRef, 'cancel');
        const cancelUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.scaleupaccounting.uk'}/booking/cancel?token=${cancelToken}`;
        console.log(`[Booking API] Generated cancel link: ${cancelUrl}`);

        // Send Customer Confirmation Email
        await resend.emails.send({
          from: config.fromAddress,
          to: email,
          subject: `Booking Confirmed - ${service}`,
          html: `
            <div style="font-family:Arial;padding:20px;background:#f7f8fa;">
              <div style="max-width:600px;margin:auto;background:white;padding:20px;border-radius:10px;">
                <h2 style="color:#0A1A2F;">Booking Confirmation</h2>
                <p>Hi ${name},</p>
                <p>Your consultation is confirmed.</p>
                <p><b>Reference:</b> ${bookingRef}<br/>
                <b>Service:</b> ${service}<br/>
                <b>Date:</b> ${date}<br/>
                <b>Time:</b> ${time} (Europe/London)</p>
                <hr/>
                <p>
                  <a href="${gcalUrl}" style="background:#0A1A2F;color:white;padding:10px 15px;text-decoration:none;border-radius:5px;display:inline-block;margin-top:10px;">Add to Google Calendar</a>
                </p>
                <p style="font-size:12px;color:#666;margin-top:30px;">
                  Need to cancel? <a href="${cancelUrl}">Click here to cancel your appointment</a>.
                </p>
              </div>
            </div>
          `,
          attachments: [
            {
              filename: 'invite.ics',
              content: icsContent,
              contentType: 'text/calendar; charset=utf-8; method=REQUEST'
            }
          ]
        });

        // Send Admin Notification Email
        await resend.emails.send({
          from: config.fromAddress,
          to: config.adminEmail,
          subject: `New Booking [${bookingRef}] - ${service}`,
          html: `
            <div style="font-family:Arial;padding:20px;">
              <h2>New Consultation Booking</h2>
              <p><b>Ref:</b> ${bookingRef}</p>
              <p><b>Service:</b> ${service}</p>
              <p><b>Date/Time:</b> ${date} at ${time}</p>
              <hr/>
              <p><b>Client:</b> ${name} (${email}, ${phone})</p>
              <p><b>Notes:</b> ${notes || '-'}</p>
            </div>
          `,
          attachments: [
            {
              filename: 'invite.ics',
              content: icsContent,
              contentType: 'text/calendar; charset=utf-8; method=REQUEST'
            }
          ]
        });
        console.log("[Booking API] Emails sent successfully to customer and admin.");

      } catch (err) {
        console.error("Async post-booking tasks failed:", err);
      }
    };

    if (typeof after === 'function') {
      after(runAsyncTasks);
    } else {
      runAsyncTasks();
    }

    console.log("[Booking API] Returning success response.");
    return NextResponse.json({ success: true, bookingRef });

  } catch (error) {
    console.error("[Booking API] Catch block Error:", {
      message: error.message,
      code: error.code,
      constraint: error.constraint,
      detail: error.detail,
      stack: error.stack
    });
    
    return NextResponse.json(
      { 
        success: false, 
        code: 'SERVER_ERROR', 
        message: process.env.NODE_ENV === 'development' ? error.message : 'An internal error occurred while processing your booking',
        devError: process.env.NODE_ENV === 'development' ? {
          code: error.code,
          constraint: error.constraint,
          detail: error.detail,
          stack: error.stack
        } : undefined
      },
      { status: 500 }
    );
  }
}
