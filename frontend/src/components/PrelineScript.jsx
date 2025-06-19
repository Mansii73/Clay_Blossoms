'use client';

import { createContext, useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // ✅ Yeh part safe browser ke liye
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
      setLoggedIn(true);
    }
  }, []);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    setLoggedIn(false);
    router.push("/login");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);
export default useAppContext;
