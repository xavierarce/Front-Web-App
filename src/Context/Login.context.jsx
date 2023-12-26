import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);

  const openLogin = () => setAuthOpen(true);
  const closeLogin = () => setAuthOpen(false);
  const setLogIn = () => {
    const tryUser = { name: "Xavier" };
    setcurrentUser(tryUser);
    return tryUser;
  };
  const setLogOff = async () => await setcurrentUser(null);

  const value = {
    authOpen,
    openLogin,
    closeLogin,
    setLogIn,
    setLogOff,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
