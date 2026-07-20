import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    const bookings = await sql`SELECT * FROM bookings WHERE id = ${id}`;
    
    if (bookings.length === 0) {
      return NextResponse.json(
        { success: false, code: 'NOT_FOUND', message: 'Booking not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, booking: bookings[0] });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to fetch booking' },
      { status: 500 }
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const { id } = await params;
    const { status, rescheduledTo } = await request.json();
    
    // Status must be 'cancelled' or 'rescheduled'
    if (status === 'cancelled') {
      await sql`
        UPDATE bookings 
        SET status = 'cancelled', cancelled_at = NOW() 
        WHERE id = ${id}
      `;
    } else if (status === 'rescheduled' && rescheduledTo) {
      await sql`
        UPDATE bookings 
        SET status = 'rescheduled', rescheduled_to = ${rescheduledTo} 
        WHERE id = ${id}
      `;
    } else {
      return NextResponse.json(
        { success: false, code: 'VALIDATION_ERROR', message: 'Invalid status update' },
        { status: 400 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Booking updated' });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to update booking' },
      { status: 500 }
    );
  }
}
