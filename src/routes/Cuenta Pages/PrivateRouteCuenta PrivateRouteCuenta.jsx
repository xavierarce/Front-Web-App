import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Login.context";
import { Navigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";

const PrivateRouteCuenta = () => {
  const { openLogin, currentUser } = useContext(AuthContext);

  // Use useEffect to handle state updates outside of render
  useEffect(() => {
    if (!currentUser) {
      openLogin();
    }
  }, [currentUser, openLogin]);

  // Redirect to the home page if not logged in
  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  // Render the UserInterface component if logged in
  return <UserInterface />;
};

export default PrivateRouteCuenta;
