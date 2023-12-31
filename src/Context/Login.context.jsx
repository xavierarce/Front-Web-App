import React, { createContext, useState } from "react";
import { FakeUser } from "../AssetsFakeData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [currentUser, setcurrentUser] = useState(null);

  const openLogin = () => setAuthOpen(true);
  const closeLogin = () => setAuthOpen(false);
  const setLogIn = () => {
    setcurrentUser(FakeUser);
    console.log(`${setcurrentUser.toString()}`);
    return FakeUser;
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
