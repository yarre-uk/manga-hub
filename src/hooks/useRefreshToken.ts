'use client';

import { signIn, useSession } from 'next-auth/react';

import { axiosAuth } from '../utils/axios';

export const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const refreshToken = async () => {
    if (session?.user?.refreshToken) {
      const res = await axiosAuth.get('Auth/refresh', {
        headers: { refreshTokenString: session?.user.refreshToken },
      });

      return await update({
        ...session,
        user: {
          ...session?.user,
          accessToken: res.data.accessToken,
          refreshToken: res.data.refreshToken,
        },
      });
    } else {
      signIn();
    }
  };
  return refreshToken;
};
