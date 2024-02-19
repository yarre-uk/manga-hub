import { createContext, useState } from 'react';

const AuthContext = createContext<{
  accessToken: string | null;
  authorized: () => boolean;
  setAccessToken: (accessToken: string) => void;
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

  return (
    <AuthContext.Provider
      value={{
        accessToken: auth,
        authorized,
        setAccessToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
