import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

function UserInterface() {
  return (
    <div>
      <NavBar />
      <Outlet/>
    </div>
  );
}

export default UserInterface;
