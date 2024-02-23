import { useContext } from 'react';

import { AccessTokenResponse } from '../types/responses';

import { AuthContext } from '@/modules/auth';
import { axios } from '@/utils';

const useRefreshToken = () => {
  const { setToken } = useContext(AuthContext);

  const refresh = async () => {
    const response = await axios.get<AccessTokenResponse>(
      '/auth/refresh-tokens',
      {
        withCredentials: true,
      },
    );

    const token = response.data.accessToken;

    setToken(token);

    return token;
  };

  return refresh;
};

export default useRefreshToken;
