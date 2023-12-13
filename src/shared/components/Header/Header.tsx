'use client';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';

import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

import { ROUTE } from '@/shared/constants/routes';

type HeaderProps = {
  className?: string;
};

function Header({ className }: HeaderProps) {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div
      className={`${className} flex h-[56px] items-center justify-between gap-5 bg-background-secondary pr-4`}
    >
      <div />
      <div />
      <div className="flex gap-5">
        {session?.user ? (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>Profile</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>{session.user.data.login}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push(ROUTE.PROFILE)}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => signOut()}>
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <>
            <Button onClick={() => router.push(ROUTE.SIGN_IN)}>Sign In</Button>
            <Button
              variant="secondary"
              onClick={() => router.push(ROUTE.SIGN_UP)}
            >
              Sign Up
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
