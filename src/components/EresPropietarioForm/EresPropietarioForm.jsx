import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./EresPropietarioForm.css";
import FormInput from "../FormInput/FormInput";

const EmptyEresPropietarioForm = {
  Name: "",
  Email: "",
  Phone: "",
  AssetType: "",
  Message: "",
};

function EresPropietarioForm({ closeQuestion }) {
  const [questionForm, setQuestionForm] = useState(EmptyEresPropietarioForm);
  const { Name, Email, Phone, AssetType, Message } = questionForm;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setQuestionForm({ ...questionForm, [name]: value });
  };

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    alert(
      `Tu pregunta '${Message}' se ha enviado. ¡Te responderemos en breve!`
    );
  };

  return (
    <form onSubmit={onSubmitQuestion} className="eres-propietario-form">
      <FormInput
        label={"Nombre:"}
        divClassName={"Form-Input-Section"}
        placeholder={"¿Cómo te llamas?"}
        name={"Name"}
        pattern={"text-input"}
        value={Name}
        onChange={onInputChange}
      />
      <FormInput
        label={"Email:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"Email"}
        pattern={"email"}
        value={Email}
        onChange={onInputChange}
      />
      <FormInput
        label={"Teléfono:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"Phone"}
        pattern={"text-input"}
        value={Phone}
        onChange={onInputChange}
      />
      <FormInput
        label={"Tipo de bien:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Tipo de bien"}
        name={"AssetType"}
        pattern={"text-input"}
        value={AssetType}
        onChange={onInputChange}
      />
      <div className="eres-propietario-form-section">
        <label>Mensaje</label>
        <textarea
          className="eres-propietario-form-message"
          maxLength={255}
          name="Message"
          value={Message}
          onChange={onInputChange}
        />
      </div>
      <CustomButton content={"Enviar"} pattern={"blue"} />
    </form>
  );
}

export default EresPropietarioForm;
