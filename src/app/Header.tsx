'use client';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react';

function Header() {
  const { data: session } = useSession();

  return (
    <div className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5 ">
      <Link href={'/'}>Home</Link>
      <Link href={'/sign-up'}>Sign Up</Link>
      <Link href={'/forgot-password'}>Forgot Password</Link>
      <Link href={'/change-password'}>Change Password</Link>
      <div className="ml-auto flex gap-2">
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
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
        <button onClick={() => console.log(session)}>session</button>
      </div>
    </div>
  );
}

export default Header;
