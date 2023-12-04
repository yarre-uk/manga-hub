'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();

  return (
    <div>
      <p className="text-center text-3xl">Profile information</p>

      <p>{session?.user?.data.login}</p>
      {/* <p>{session?.user?.data.email}</p>
      <p>{session?.user?.data.phoneNumber}</p>
      <p>{session?.user?.data.description}</p>
      <p>{session?.user?.data.avatar}</p> */}
    </div>
  );
}
