import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./QuestionPopUp.css";

const EmptyQuestionForm = {
  Subject: "",
  Message: "",
};

function QuestionPopUp({ closeQuestion }) {
  const [questionForm, setQuestionForm] = useState(EmptyQuestionForm);
  const { Subject } = questionForm;

  const onMessageChange = (e) => {
    const { name, value } = e.target;
    setQuestionForm({ ...questionForm, [name]: value });
  };

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    alert(
      `Tu pregunta '${Subject}' se ha enviado\nTe responderemos en breve!`
    );
  };

  return (
    <form
      id="QuestionPopUp"
      onSubmit={onSubmitQuestion}
      className="QuestionPopUp-container"
    >
      <CustomButton
        content={"Cerrar"}
        pattern={"close-white"}
        onButtonClick={closeQuestion}
      />
      <div className="QuestionPopUp-section">
        <label>Asunto</label>
        <input name="Subject" onChange={onMessageChange} type="text" />
      </div>
      <div className="QuestionPopUp-section">
        <label>Mensaje</label>
        <textarea
          className="QuestionPopUp-message"
          maxLength={255}
          name="Message"
          onChange={onMessageChange}
        />
      </div>
      <CustomButton content={"Enviar"} pattern={"blue"} />
    </form>
  );
}

export default QuestionPopUp;
