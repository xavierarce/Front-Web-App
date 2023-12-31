import { useContext } from "react";
import { AuthContext } from "../Context/Login.context";
import { Navigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";

const PrivateRoute = () => {
  const { currentUser } = useContext(AuthContext);

  // Check if the user is logged in
  if (!currentUser) {
    // Redirect to the home page if not logged in
    alert("Necesitas Inciar Secion para acceder");
    return <Navigate to="/" replace />;
  }

  // Render the UserInterface component if logged in
  return <UserInterface />;
};

export default PrivateRoute;
