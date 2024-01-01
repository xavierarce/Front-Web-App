import { useContext } from "react";
import { AuthContext } from "../Context/Login.context";
import { Navigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";

const PrivateRoute = () => {
  const { openLogin, currentUser } = useContext(AuthContext);

  // Check if the user is logged in
  if (!currentUser) {
    openLogin()
    // Redirect to the home page if not logged in
    return <Navigate to="/" replace />;
  }

  // Render the UserInterface component if logged in
  return <UserInterface />;
};

export default PrivateRoute;
