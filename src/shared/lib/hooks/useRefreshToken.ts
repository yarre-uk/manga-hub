'use client';

import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';

export const useRefreshToken = () => {
  const { data: session, update } = useSession();

  const refreshToken = async () => {
    if (session?.user?.refreshToken) {
      const res = await axios.get('https://localhost:7142/api/Auth/refresh', {
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
