import { createContext, useState } from 'react';

type Auth = {
  accessToken?: string;
  refreshToken?: string;
};

const AuthContext = createContext<{
  auth: Auth;
  setAccessToken: (accessToken: string) => void;
}>({ auth: null, setAccessToken: null });

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({});

  const setAccessToken = (accessToken: string) => {
    setAuth((prev) => ({ ...prev, accessToken }));
  };

  return (
    <AuthContext.Provider value={{ auth, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
