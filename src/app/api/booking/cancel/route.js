import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';
import { verifyActionToken } from '@/lib/authUtils';

export async function POST(request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, code: 'MISSING_TOKEN', message: 'Token is required' },
        { status: 400 }
      );
    }

    const payload = await verifyActionToken(token);

    if (!payload || payload.action !== 'cancel') {
      return NextResponse.json(
        { success: false, code: 'INVALID_TOKEN', message: 'Invalid or expired cancellation token' },
        { status: 403 }
      );
    }

    const { ref } = payload;

    const result = await sql`
      UPDATE bookings 
      SET status = 'cancelled', cancelled_at = NOW() 
      WHERE booking_ref = ${ref} AND status = 'confirmed'
      RETURNING id
    `;

    if (result.length === 0) {
      return NextResponse.json(
        { success: false, code: 'ALREADY_CANCELLED', message: 'Booking is already cancelled or does not exist' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: 'Booking cancelled successfully' });

  } catch (error) {
    console.error("Cancellation API Error:", error);
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'An internal error occurred' },
      { status: 500 }
    );
  }
}
