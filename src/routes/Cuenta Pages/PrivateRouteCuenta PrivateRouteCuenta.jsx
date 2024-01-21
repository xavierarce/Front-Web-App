import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import UserInterface from "./UserInterface/UserInterface";
import { serverGetUserCuentaInferface } from "../../API/serverFuncions";

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
          const response = await serverGetUserCuentaInferface(storedToken)
          const data = await response.json();
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
