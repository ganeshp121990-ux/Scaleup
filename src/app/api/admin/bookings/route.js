import { NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const date = searchParams.get('date');
    
    let query;
    if (date) {
      query = sql`SELECT * FROM bookings WHERE slot_date = ${date} ORDER BY slot_time ASC`;
    } else {
      query = sql`SELECT * FROM bookings ORDER BY slot_date DESC, slot_time ASC LIMIT 100`;
    }
    
    const bookings = await query;
    return NextResponse.json({ success: true, bookings });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}
