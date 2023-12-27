import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ContactanosForm.css";
import FormInput from "../FormInput/FormInput";

const EmptyContactanosForm = {
  Subject: "",
  Message: "",
};

function ContactanosForm({ closeQuestion }) {
  const [questionForm, setQuestionForm] = useState(EmptyContactanosForm);
  const { Subject } = questionForm;

  const onMessageChange = (e) => {
    const { name, value } = e.target;
    setQuestionForm({ ...questionForm, [name]: value });
  };

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    alert(`Tu pregunta '${Subject}' se ha enviado\nTe responderemos en breve!`);
  };

  return (
    <form onSubmit={onSubmitQuestion} className="contactanos-form">
      <FormInput
        label={"Nombre:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Como te llamas?"}
        name={"name"}
        pattern={"text-input"}
      />
      <FormInput
        label={"Email:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"email"}
        pattern={"text-input"}
      />
      <FormInput
        label={"Telefono:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"phone"}
        pattern={"text-input"}
      />
      <div className="contactanos-form-section">
        <label>Mensaje</label>
        <textarea
          className="contactanos-form-message"
          maxLength={2000}
          name="Message"
          onChange={onMessageChange}
        />
      </div>
      <CustomButton content={"Enviar"} pattern={"blue"} />
    </form>
  );
}

export default ContactanosForm;
