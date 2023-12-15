import { NextResponse } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

import { AdminPages, UserPages } from './shared/constants/auth';
import { ROUTE } from './shared/constants/routes';

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      AdminPages.includes(request.nextUrl.pathname as ROUTE) &&
      request.nextauth.token?.role !== 'Admin'
    ) {
      return NextResponse.rewrite('http://localhost:3000/404');
    }

    if (
      UserPages.includes(request.nextUrl.pathname as ROUTE) &&
      request.nextauth.token?.role !== 'Admin' &&
      request.nextauth.token?.role !== 'User'
    ) {
      return NextResponse.redirect(new URL('/sign-in', request.url).toString());
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token?.role,
    },
  },
);

export const config = {
  matcher: ['/profile', '/admin'],
};
