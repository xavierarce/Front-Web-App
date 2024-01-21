import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import PanelUsuario from "../../../components/PanelUsuario/PanelUsuario";

import "./UserInterface.css";

const UserInterface = ({ userOnInterface }) => {
  return (
    <div className="App">
      <NavBar />
      <div className="user-inferface">
        <PanelUsuario />
        <div className="user-outlet-section">
          {userOnInterface ? (
            <Outlet context={[userOnInterface]} />
          ) : (
            <div className="UserInterface-loading-spinner-container">
              <div className="loading-spinner" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
