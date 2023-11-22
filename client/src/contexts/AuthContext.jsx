import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log("isAuthenticated:", isAuthenticated);

  const [token, setToken] = useState(null);
  console.log("token:", token);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(storedToken);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, token, setToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};
