import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/Login.context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";

const PrivateRouteCuenta = () => {
  const { openLogin, currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedToken = localStorage.getItem("hogar-seguro");
    if (storedToken) {
      const verifyTokenRestart = async () => {
        try {
          const response = await fetch("http://localhost:8000/restart", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          });

          const data = await response.json();

          if (response.ok) {
            setCurrentUser(data);
            return navigate(location.pathname);
          } else {
            if (data.error.name === "TokenExpiredError")
              return localStorage.removeItem("hogar-seguro");
          }
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          console.error(error);
        }
      };
      verifyTokenRestart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
