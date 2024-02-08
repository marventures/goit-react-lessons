import { createContext, useContext, useState } from 'react';

// Create context, default value can be empty
const UserContext = createContext();

// This will be our Custom Context Hook, allows us to access the context value, will be used in UserMenu.jsx
export const useUser = () => useContext(UserContext);

// This will be our Custom Context Provider, allows us to have a Provider wrapper, will be used in index.js
export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setUsername('Mango');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername(null);
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, username, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
