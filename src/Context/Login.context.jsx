import React, { createContext, useState } from "react";
// import { FakeUser } from "../AssetsFakeData";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const openLogin = () => setAuthOpen(true);
  const closeLogin = () => setAuthOpen(false);
  const setLogOff =  () => {
    setCurrentUser(null);
    return localStorage.removeItem("hogar-seguro");
  };
  const adminPrivilege = () => {
    return currentUser && currentUser.role === "agencyAdministrator";
  };

  const value = {
    authOpen,
    openLogin,
    closeLogin,
    setLogOff,
    currentUser,
    setCurrentUser,
    adminPrivilege,
    openRegister,
    closeRegister,
    registerOpen,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
