import { ReactNode, createContext, useState } from 'react';

const AuthContext = createContext<{
  accessToken: string;
  setToken: (accessToken: string) => void;
  clearToken: () => void;
}>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string>();

  const setToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
    setAccessToken(accessToken);
  };

  const clearToken = () => {
    localStorage.removeItem('accessToken');
    setAccessToken(null);
  };

  return (
    <AuthContext.Provider
      value={{
        accessToken,
        clearToken,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
