import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import PanelUsuario from "../../../components/PanelUsuario/PanelUsuario";

import "./UserInterface.css";
import { useEffect, useState } from "react";

function UserInterface() {
  const [userOnInterface, setUserOnInterface] = useState();
  
  useEffect(() => {
    console.log("0");
    const getUserData = async () => {
      try {
        const storedToken = localStorage.getItem("hogar-seguro");
        if (storedToken) {
          console.log("1");
          const response = await fetch("http://localhost:8000/cuenta/", {
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
          }
        }
      } catch (error) {}
    };
    getUserData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <div className="user-inferface">
        <PanelUsuario />
        <div className="user-outlet-section">
          <Outlet context={[userOnInterface, setUserOnInterface]} />
        </div>
      </div>
    </div>
  );
}

export default UserInterface;
