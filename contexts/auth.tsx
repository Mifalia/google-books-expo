import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { getToken, saveToken, removeToken } from "@/services/storage/userStorage"

interface AuthContextProps {
  userToken: string | null;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userToken, setUserToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadToken = async () => {
      const token = await getToken();
      setUserToken(token);
      setIsLoading(false);
    };

    loadToken();
  }, []);

  const signIn = async (token: string) => {
    await saveToken(token);
    setUserToken(token);
  };

  const signOut = async () => {
    await removeToken();
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};