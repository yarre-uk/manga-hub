'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import useAxiosAuth from '@/shared/hooks/useAxiosAuth';
import { User } from '@/shared/models/user';

export default function Profile() {
  const axiosAuth = useAxiosAuth();
  const { data: session } = useSession();
  const [user, setUser] = useState<User>(null);

  useEffect(() => {
    (async () => {
      if (!session) {
        return;
      }

      const res = await axiosAuth.get<User>(`api/User`, {
        params: { userId: session.user.id },
      });

      setUser(res.data);
    })();
  }, [session]);

  return <text>{JSON.stringify(user, null, 4)}</text>;
}
