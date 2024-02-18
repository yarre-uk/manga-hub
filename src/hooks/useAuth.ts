import { useContext, useEffect } from 'react';

import useRefreshToken from './useRefreshToken';

import { AuthContext } from '@/modules/auth';
import { axiosAuth } from '@/utils';

const useAuth = () => {
  const refresh = useRefreshToken();
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    const requestIntercept = axiosAuth.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = axiosAuth.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosAuth(prevRequest);
        }

        return Promise.reject(error);
      },
    );

    return () => {
      axiosAuth.interceptors.request.eject(requestIntercept);
      axiosAuth.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosAuth;
};

export default useAuth;
