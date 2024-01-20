import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";

const PrivateRouteCuenta = () => {
  const { openLogin, currentUser } = useContext(AuthContext);
  const [userOnInterface, setUserOnInterface] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedToken = localStorage.getItem("hogar-seguro");
        if (storedToken) {
          const response = await fetch("http://localhost:8000/cuenta/userinterface", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          });
          const data = await response.json();
          console.log("data", data);
          console.log("respnse", response);
          if (response.ok) {
            setUserOnInterface(data.user);
            return navigate(location.pathname);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  return <UserInterface userOnInterface={userOnInterface} />;
};

export default PrivateRouteCuenta;
