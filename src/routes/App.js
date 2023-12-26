import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import Authenticate from "../components/Authenticate/Authenticate";
import { useContext } from "react";
import { AuthContext } from "../Context/Login.context";

function App() {
  const { authOpen } = useContext(AuthContext);

  return (
    <div className="App">
      <NavBar />
      {authOpen && <Authenticate />}
      <Outlet />
    </div>
  );
}

export default App;
