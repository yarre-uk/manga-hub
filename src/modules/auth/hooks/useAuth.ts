import { jwtDecode } from 'jwt-decode';
import { useContext, useEffect } from 'react';

import useRefreshToken from './useRefreshToken';
import { AccessTokenResponse } from '../types/responses';

import { AuthContext, useAxios } from '@/modules/auth';
import { SignInFormValues, SignUpFormValues } from '@/types';

const useAuth = () => {
  const { setToken, clearToken, accessToken } = useContext(AuthContext);

  const axios = useAxios();
  const refresh = useRefreshToken();

  const signIn = async (data: SignInFormValues) => {
    const res = await axios.post<AccessTokenResponse>('/auth/signin', data);
    const accessToken = res.data.accessToken;

    setToken(accessToken);
  };

  const signUp = async (data: SignUpFormValues) => {
    //TODO add toast notification
    axios.post('/auth/signup', data);
  };

  const logOut = () => {
    axios.post('/auth/logout');
    clearToken();
  };

  const authorized = () => !!accessToken;

  useEffect(() => {
    (async () => {
      const localStorageToken = localStorage.getItem('accessToken');

      try {
        if (localStorageToken) {
          const payload = jwtDecode(localStorageToken);

          if (payload.exp * 1000 < Date.now()) {
            throw new Error('Token expired');
          }
        }
      } catch (error) {
        const newToken = await refresh();

        setToken(newToken);
      }
    })();
  }, []);

  return {
    signIn,
    signUp,
    logOut,
    authorized,
  };
};

export default useAuth;
