import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar/NavBar";
import PanelUsuario from "../../../components/PanelUsuario/PanelUsuario";

import "./UserInterface.css";

const UserInterface = ({userOnInterface}) => {
  console.log('USER INTERFEACE',userOnInterface);

  return (
    <div className="App">
      <NavBar />
      <div className="user-inferface">
        <PanelUsuario />
        <div className="user-outlet-section">
          <Outlet context={[userOnInterface]} />
        </div>
      </div>
    </div>
  );
};

export default UserInterface;
