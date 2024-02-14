import { createContext, useState } from 'react';

type Auth = {
  accessToken?: string;
  refreshToken?: string;
};

const AuthContext = createContext<{
  auth: Auth;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
}>({ auth: null, setAccessToken: null, setRefreshToken: null });

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState<Auth>({});

  const setAccessToken = (accessToken: string) => {
    setAuth((prev) => ({ ...prev, accessToken }));
  };

  const setRefreshToken = (refreshToken: string) => {
    setAuth((prev) => ({ ...prev, refreshToken }));
  };

  return (
    <AuthContext.Provider value={{ auth, setAccessToken, setRefreshToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
