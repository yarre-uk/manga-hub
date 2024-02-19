import { useContext } from 'react';

import { AuthContext, useAxios } from '@/modules/auth';
import { SignInFormValues, SignUpFormValues } from '@/types';

const useAuth = () => {
  const { setAccessToken } = useContext(AuthContext);
  const axios = useAxios();

  const signIn = async (data: SignInFormValues) => {
    const res = await axios.post<{ accessToken: string }>('/auth/signin', data);
    const accessToken = res.data.accessToken;

    setAccessToken(accessToken.split(' ')[1]);
  };

  const signUp = async (data: SignUpFormValues) => {
    //TODO add toast notification
    axios.post('/auth/signup', data);
  };

  const logOut = () => {
    axios.post('/auth/logout');
    setAccessToken(null);
  };

  return { signIn, signUp, logOut };
};

export default useAuth;
