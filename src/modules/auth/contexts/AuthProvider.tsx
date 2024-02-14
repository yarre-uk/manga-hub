import { createContext, useState } from 'react';

import { SignInFormValues, SignUpFormValues } from '@/types';

const AuthContext = createContext<{
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  signIn: (data: SignInFormValues) => void;
  signUp: (data: SignUpFormValues) => void;
  logOut: () => void;
}>(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState<string>();

  //TODO
  const setAccessToken = (accessToken: string) => {
    setAuth(accessToken);
  };

  const signIn = (data: SignInFormValues) => {};

  const signUp = (data: SignUpFormValues) => {};

  const logOut = () => {};

  return (
    <AuthContext.Provider
      value={{ accessToken: auth, setAccessToken, signIn, signUp, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
