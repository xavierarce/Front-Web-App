import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./AgentPage.css";
import NavBarAgency from "../../../components/NavBarAgency/NavBarAgency";
import PanelAgencia from "../../../components/PanelAgencia/PanelAgencia";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/Login.context";

function AgentPage() {
  const { setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

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
            setCurrentUser(data);
            return navigate(location.pathname);
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
      <NavBarAgency />
      <PanelAgencia />
      <div className="agentpage-outlet">
        <Outlet />
      </div>
    </div>
  );
}

export default AgentPage;
