import { NextResponse } from 'next/server';
import { initDb } from '@/lib/db';
import { DEFAULTS } from '@/lib/bookingConfig';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    if (searchParams.get('secret') !== (process.env.ADMIN_PASSWORD || process.env.ADMIN_SECRET)) {
      return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
    }

    await initDb(DEFAULTS);

    return NextResponse.json({ success: true, message: 'Database initialized and seeded successfully' });
  } catch (error) {
    console.error("DB Init Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to initialize database',
      devError: process.env.NODE_ENV === 'development' ? {
        message: error.message,
        code: error.code,
        stack: error.stack
      } : undefined
    }, { status: 500 });
  }
}
