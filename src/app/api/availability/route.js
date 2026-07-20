import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { getConfig } from '@/lib/bookingConfig';
import { isWorkingDay, generateSlots, applyMinNotice, formatTimeSlot } from '@/lib/bookingUtils';

// Ensures route is always evaluated dynamically
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateStr = searchParams.get('date');

    if (!dateStr || !/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
      return NextResponse.json(
        { success: false, code: 'VALIDATION_ERROR', message: 'Invalid or missing date (YYYY-MM-DD)' },
        { status: 400 }
      );
    }

    const config = await getConfig();

    // 1. Check if date is in the past (using London time)
    const londonNowStr = new Intl.DateTimeFormat('en-CA', { timeZone: config.timezone }).format(new Date());
    if (dateStr < londonNowStr) {
      return NextResponse.json({ available: [], fullyBooked: true, reason: 'past_date', timezone: config.timezone });
    }

    // 2. Check if it's a working day / not blocked
    const workingDay = await isWorkingDay(dateStr, config, sql);
    if (!workingDay) {
      return NextResponse.json({ available: [], fullyBooked: true, reason: 'non_working_day', timezone: config.timezone });
    }

    // 3. Generate all candidate slots
    const allCandidateSlots = generateSlots(dateStr, config);

    // 4. Apply min notice filter (e.g. 3 hours)
    const availableCandidateSlots = applyMinNotice(allCandidateSlots, dateStr, config);

    if (availableCandidateSlots.length === 0) {
      return NextResponse.json({ available: [], fullyBooked: true, reason: 'min_notice_passed', timezone: config.timezone });
    }

    // 5. Check DB for already confirmed bookings on this date
    // We only filter out 'confirmed' bookings. Cancelled slots are automatically freed.
    let bookedRows = [];
    try {
      bookedRows = await sql`
        SELECT slot_time FROM bookings 
        WHERE slot_date = ${dateStr} AND status = 'confirmed'
      `;
    } catch (dbErr) {
      console.warn("Failed to check booked slots in DB, assuming all slots are free:", dbErr.message);
    }

    // slot_time comes back as "HH:MM:SS" from Postgres
    const bookedSet = new Set(bookedRows.map(row => row.slot_time.substring(0, 5)));

    // 6. Subtract booked from candidates
    const finalSlots = availableCandidateSlots.filter(slot => !bookedSet.has(slot));

    // Convert internal "13:00" back to "01:00 PM" for the frontend
    const displaySlots = finalSlots.map(formatTimeSlot);

    return NextResponse.json(
      {
        available: displaySlots,
        fullyBooked: displaySlots.length === 0,
        timezone: config.timezone
      },
      {
        headers: {
          'Cache-Control': 'no-store, must-revalidate',
        }
      }
    );

  } catch (error) {
    console.error("Availability API Error:", error);
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to fetch availability' },
      { status: 500 }
    );
  }
}
