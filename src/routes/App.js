import { Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import { useContext } from "react";
import { AuthContext } from "../Context/Login.context";
import AuthenticatePopUp from "../components/AuthenticatePopUp/AuthenticatePopUp";

function App() {
  const { authOpen } = useContext(AuthContext);

  return (
    <div className="App">
      <NavBar />
      <ScrollRestoration/>
      {authOpen && <AuthenticatePopUp />}
      <Outlet />
    </div>
  );
}

export default App;
