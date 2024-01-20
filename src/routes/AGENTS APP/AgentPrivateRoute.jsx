import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentPage from "./AgentPage/AgentPage";

const AgentPrivateRoute = () => {
  const [currentAgent, setCurrentAgent] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const storedToken = localStorage.getItem("hogar-seguro");
        if (storedToken) {
          const response = await fetch("http://localhost:8000/cuenta/agent", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${storedToken}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            console.log(data.user.role);
            if (data.user.role !== "agentAdmin") {
              return navigate("/", { replace: true });
            }
            return setCurrentAgent(data.user);
          }
        }
        return navigate("/", { replace: true });
      } catch (error) {
        console.error(error);
      }
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Render the UserInterface component if logged
  if (currentAgent) {
    return <AgentPage currentAgent={currentAgent} />;
  }
};

export default AgentPrivateRoute;
