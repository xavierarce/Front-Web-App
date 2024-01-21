import { useContext, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import DateInput from "../DateInput/DateInput";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import "./VisitForm.css";
import { AuthContext } from "../../Context/Login.context";
import { getTokenHSLS } from "../../API/LocalStorage";

const EmptyVisitForm = {
  visitDate: "",
  entryDate: "",
};

const VisitForm = ({ onButtonClick, assetInfo }) => {
  const [visitDates, setVisitDates] = useState(EmptyVisitForm);
  const [isLoading, setIsLoading] = useState(false);
  const { visitDate } = visitDates;
  const { currentUser, openLogin } = useContext(AuthContext);

  const onVisitRequest = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      return openLogin();
    }
    if (!visitDate) {
      return alert("Porfavor selecciona una fecha de visita");
    }
    if (new Date(visitDate) < new Date()) {
      return alert("Porfavor selecciona una fecha valida");
    }
    const token = getTokenHSLS();
    console.log(visitDate);
    if (token) {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/visit/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ visitDates, assetInfo }),
        });
    
        const data = await response.json();
    
        if (response.ok) {
          alert("Gracias! Nos contactaremos contigo!");
        } else if (data.message.includes("Tienes agendada una cita el")) {
          alert(data.message);
        } else {
          // Handle non-ok response
          console.error(`Failed to register visit. Status: ${response.status}`);
        }
      } catch (error) {
        console.error("Error during visit registration:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const onDateSelection = (e) => {
    const { name, value } = e.target;
    setVisitDates({ ...visitDates, [name]: value });
  };

  return (
    <div className="asset-page-visits-questions">
      <form className="asset-page-questions-form" onSubmit={onVisitRequest}>
        <div className="asset-page-questions-container">
          <div className="asset-page-question-container">
            {isLoading ? <LoadingSpinner /> : null}
            <label className="asset-page-question">
              Selecciona una fecha para visitar:
            </label>
            <DateInput onChange={onDateSelection} name={"visitDate"} />
          </div>
          <div className="asset-page-question-container">
            <label className="asset-page-question">
              ¿Cuándo te gustaría mudarte o ingresar?
            </label>
            <DateInput onChange={onDateSelection} name={"entryDate"} />
          </div>
        </div>
        <CustomButton content={"Solicitar Visita"} pattern={"blue-small"} />
      </form>
      <div className="asset-page-question-endingbox">
        <p className="asset-page-question">¿Tienes alguna pregunta?</p>
        <a href="#QuestionPopUp">
          <CustomButton
            pattern={"blue-small"}
            content={"Consultanos!"}
            onButtonClick={onButtonClick}
          />
        </a>
      </div>
    </div>
  );
};
export default VisitForm;
