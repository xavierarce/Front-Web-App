import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Context/Login.context";
import AuthenticatePopUp from "../components/AuthenticatePopUp/AuthenticatePopUp";
import RegisterPopUp from "../components/RegisterPopUp/RegisterPopUp";

function App() {
  const { authOpen, registerOpen, currentUser, setCurrentUser } =
    useContext(AuthContext);

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
            return setCurrentUser(data);
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

  return (
    <div className="App">
      <NavBar />
      <ScrollRestoration />
      {!currentUser && registerOpen && <RegisterPopUp />}
      {!currentUser && authOpen && <AuthenticatePopUp />}
      <Outlet />
    </div>
  );
}

export default App;
