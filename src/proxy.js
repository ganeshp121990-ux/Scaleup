import { NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/authUtils';

export async function proxy(request) {
  // If the request is for an admin API route (excluding login)
  if (request.nextUrl.pathname.startsWith('/api/admin') && !request.nextUrl.pathname.startsWith('/api/admin/login')) {
    
    // In a fully-fledged setup with NextAuth / Clerk, you would verify the session here.
    // For now, we expect either an Auth header or a secure cookie.
    
    // Example Bearer Token Check (Replace with actual IDP check)
    const authHeader = request.headers.get('authorization');
    const cookieToken = request.cookies.get('admin_session');
    
    // Verify session token
    const token = (authHeader && authHeader.split(' ')[1]) || (cookieToken && cookieToken.value);
    
    let isValid = false;
    if (token) {
      const payload = await verifyAdminToken(token);
      if (payload && payload.role === 'admin') {
        isValid = true;
      }
    }
    
    if (!isValid) {
      return NextResponse.json(
        { success: false, code: 'UNAUTHORIZED', message: 'Authentication required' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/admin/:path*',
};
