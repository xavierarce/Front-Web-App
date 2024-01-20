import { useContext, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import DateInput from "../DateInput/DateInput";
import "./VisitForm.css";
import { AuthContext } from "../../Context/Login.context";
import { getTokenHSLS } from "../../API/LocalStorage";

const EmptyVisitForm = {
  visitDate: "",
  entryDate: "",
};

const VisitForm = ({ onButtonClick, assetInfo }) => {
  const [visitDates, setVisitDates] = useState(EmptyVisitForm);
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
        const response = await fetch("http://localhost:8000/visit/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({visitDate, assetInfo}),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {}
    }

    alert(`Perfecto! Has solicitado una visita el ${visitDate}`);
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
