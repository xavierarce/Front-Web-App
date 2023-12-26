import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import "./App.css";
import Authenticate from "../components/Authenticate/Authenticate";
import { useState } from "react";

function App() {
  const [authOpen, setAuthOpen] = useState(false);
  const openLogin = () => setAuthOpen(true);
  const closeLogin = () => setAuthOpen(false);

  return (
    <div className="App">
      <NavBar openLogin={openLogin} />
      {authOpen && <Authenticate closeLogin={closeLogin} />}
      <Outlet />
    </div>
  );
}

export default App;
