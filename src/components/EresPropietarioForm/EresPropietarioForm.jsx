import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./EresPropietarioForm.css";
import FormInput from "../FormInput/FormInput";

const EmptyEresPropietarioForm = {
  Subject: "",
  Message: "",
};

function EresPropietarioForm({ closeQuestion }) {
  const [questionForm, setQuestionForm] = useState(EmptyEresPropietarioForm);
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
    <form onSubmit={onSubmitQuestion} className="eres-propietario-form">
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
      <FormInput
        label={"Tipo de bien:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Tipo de Bien"}
        name={"assetType"}
        pattern={"text-input"}
      />
      <div className="eres-propietario-form-section">
        <label>Mensaje</label>
        <textarea
          className="eres-propietario-form-message"
          maxLength={255}
          name="Message"
          onChange={onMessageChange}
        />
      </div>
      <CustomButton content={"Enviar"} pattern={"blue"} />
    </form>
  );
}

export default EresPropietarioForm;
