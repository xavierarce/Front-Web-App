import { useContext, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import DateInput from "../DateInput/DateInput";
import "./VisitForm.css";
import { AuthContext } from "../../Context/Login.context";

const EmptyVisitForm = {
  visitDate: "",
  entryDate: "",
};

const VisitForm = ({ onButtonClick }) => {
  const [visitDates, setVisitDates] = useState(EmptyVisitForm);
  const { visitDate } = visitDates;
  const { currentUser, openLogin } = useContext(AuthContext);

  const onVisitRequest = (e) => {
    e.preventDefault();
    if (!visitDate) {
      alert("Porfavor selecciona una fecha de visita");
      return;
    }
    if (new Date(visitDate) < new Date()) {
      alert("Porfavor selecciona una fecha valida");
      return;
    }
    if (!currentUser) {
      openLogin();
      return;
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
