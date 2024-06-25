import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthPContextroviderProps {
  children: ReactNode;
}

interface AuthContextType {
  login: (email: string, username: string) => void;
  isAuthenticated: boolean;
  userDetails: object;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<AuthPContextroviderProps> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  const login = (email: string, username: string) => {
    // Here you would handle your authentication logic
    if (email && username) {
      setIsAuthenticated(true);
      setUserDetails({ email, username });
    }
  };

  const value = {
    login,
    isAuthenticated,
    userDetails,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
