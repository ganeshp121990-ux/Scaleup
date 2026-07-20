import { NextResponse } from 'next/server';
import { createAdminToken } from '@/lib/authUtils';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const { password } = await request.json();

    // Check against an env var for the stubbed version.
    // In production, you would replace this with Auth.js or Clerk.
    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, code: 'INVALID_CREDENTIALS', message: 'Invalid admin credentials' },
        { status: 401 }
      );
    }

    const token = await createAdminToken({ role: 'admin' });
    
    const cookieStore = await cookies();
    cookieStore.set('admin_session', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 8 * 60 * 60, // 8 hours
      path: '/'
    });

    return NextResponse.json({ success: true, message: 'Logged in successfully' });
  } catch (error) {
    return NextResponse.json(
      { success: false, code: 'SERVER_ERROR', message: 'An internal error occurred' },
      { status: 500 }
    );
  }
}
