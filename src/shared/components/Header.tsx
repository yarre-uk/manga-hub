'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { ROUTE } from '@/shared/constants/routes';

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-5 bg-secondary p-4">
      <div className="container flex justify-end gap-5">
        {session?.user ? (
          <>
            <p className="text-sky-600">
              {' '}
              {session?.user?.refreshToken?.slice(0, 15)}
            </p>

            <button className="text-red-500" onClick={() => signOut()}>
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href={ROUTE.SIGN_IN}>Sign In</Link>
            <Link href={ROUTE.SIGN_UP}>Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
