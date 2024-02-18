import { useContext } from 'react';

import { AuthContext } from '@/modules/auth';
import { axios } from '@/utils';

const useRefreshToken = () => {
  const { setAccessToken } = useContext(AuthContext);

  const refresh = async () => {
    const response = await axios.get('/refresh', {
      withCredentials: true,
    });

    setAccessToken(response.data.accessToken);

    return response.data.accessToken as string;
  };

  return refresh;
};

export default useRefreshToken;
