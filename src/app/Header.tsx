'use client';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

function Header() {
  const { data: session } = useSession();

  return (
    <div className="flex gap-5 bg-secondary p-4">
      <Link href={'/'}>Home</Link>
      <div className="ml-auto flex gap-5">
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
            <button className="text-green-600" onClick={() => signIn()}>
              Sign In
            </button>
            <Link href={'/sign-up'}>Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
