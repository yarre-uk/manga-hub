import { NextResponse } from 'next/server';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(request: NextRequestWithAuth) {
    // console.log(request.nextauth?.token?.role);

    if (
      request.nextUrl.pathname.startsWith('/admin') &&
      request.nextauth.token?.role !== 'Admin'
    ) {
      return NextResponse.rewrite('/404');
    }

    if (
      request.nextUrl.pathname.startsWith('/weather') &&
      request.nextauth.token?.role !== 'Admin' &&
      request.nextauth.token?.role !== 'User'
    ) {
      // console.log(`weather ${!!request.nextauth.token?.role}`);
      return NextResponse.redirect(new URL('/sign-in', request.url).toString());
    }

    // console.log(1);
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // console.log(`auth ${!!token?.role}`);

        return !!token?.role;
      },
    },
  },
);

export const config = { matcher: ['/admin', '/weather'] };
