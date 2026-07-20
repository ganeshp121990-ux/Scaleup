import { NextResponse } from 'next/server';
import { getConfig, setConfig } from '@/lib/bookingConfig';

export async function GET(request) {
  try {
    const config = await getConfig();
    return NextResponse.json({ success: true, config });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to fetch config' },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    const { key, value } = await request.json();
    
    if (!key || value === undefined) {
      return NextResponse.json(
        { success: false, code: 'VALIDATION_ERROR', message: 'Key and value required' },
        { status: 400 }
      );
    }

    await setConfig(key, value);
    
    return NextResponse.json({ success: true, message: 'Config updated' });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'Failed to update config' },
      { status: 500 }
    );
  }
}
