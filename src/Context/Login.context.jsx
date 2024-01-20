import React, { createContext, useEffect, useState } from "react";
import { getTokenHSLS } from "../API/LocalStorage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authOpen, setAuthOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const storedToken = getTokenHSLS();
      if (storedToken) {
        try {
          const response = await fetch("http://localhost:8000/cuenta/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          });
          const data = await response.json();
          if (response.ok) {
            const user = data.user;
            return setCurrentUser(user); // Set to an empty object if data.user is falsy
          } else {
            if (data.error.name === "TokenExpiredError")
              return localStorage.removeItem("hogar-seguro");
          }
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          setCurrentUser(null); // Set to an empty object in case of an error
          return localStorage.removeItem("hogar-seguro");
        }
      }
    };

    getUserData();
  }, []);

  console.log("Conetxt", currentUser);

  const openRegister = () => setRegisterOpen(true);
  const closeRegister = () => setRegisterOpen(false);
  const openLogin = () => setAuthOpen(true);
  const closeLogin = () => setAuthOpen(false);
  const setLogOff = () => {
    setCurrentUser(null);
    return localStorage.removeItem("hogar-seguro");
  };
  const adminPrivilege = () => {
    return currentUser && currentUser.role === "agentAdmin";
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
