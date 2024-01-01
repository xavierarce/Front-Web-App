import { Outlet } from "react-router-dom";
import NavBarAgency from "../../components/NavBarAgency/NavBarAgency";
import PanelAgencia from "../../components/PanelAgencia/PanelAgencia";
import "./AgentPage.css";


function AgentPage() {
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
