import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import { useContext} from "react";
import { AuthContext } from "../Context/Login.context";
import AuthenticatePopUp from "../components/AuthenticatePopUp/AuthenticatePopUp";
import RegisterPopUp from "../components/RegisterPopUp/RegisterPopUp";

function App() {
  const { authOpen, registerOpen, currentUser } =
    useContext(AuthContext);


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
