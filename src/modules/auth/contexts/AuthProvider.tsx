import { createContext, useState } from 'react';

import { SignInFormValues, SignUpFormValues } from '@/types';

const AuthContext = createContext<{
  accessToken: string | null;
  authorized: () => boolean;
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

  const authorized = () => {
    return !!auth;
  };

  const signIn = (data: SignInFormValues) => {
    console.log('signIn data ->', data);
  };

  const signUp = (data: SignUpFormValues) => {
    console.log('signUp data ->', data);
  };

  const logOut = () => {
    console.log('logOut');
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken: auth,
        authorized,
        setAccessToken,
        signIn,
        signUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
