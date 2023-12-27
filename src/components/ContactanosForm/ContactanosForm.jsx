import { useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ContactanosForm.css";
import FormInput from "../FormInput/FormInput";

const initialContactanosForm = {
  Name: "",
  Email: "",
  Phone: "",
  Message: "",
};

function ContactanosForm({ closeQuestion }) {
  const [contactanosForm, setContactanosForm] = useState(initialContactanosForm);
  const { Message } = contactanosForm;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setContactanosForm({ ...contactanosForm, [name]: value });
  };

  const onSubmitQuestion = (e) => {
    e.preventDefault();
    alert(`Tu mensaje '${Message}' ha sido enviado. ¡Te responderemos en breve!`);
  };

  return (
    <form onSubmit={onSubmitQuestion} className="contactanos-form">
      <FormInput
        label={"Nombre:"}
        divClassName={"Form-Input-Section"}
        placeholder={"¿Cómo te llamas?"}
        name={"Name"}
        pattern={"text-input"}
        onChange={onInputChange}
      />
      <FormInput
        label={"Email:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"Email"}
        pattern={"text-input"}
        onChange={onInputChange}
      />
      <FormInput
        label={"Teléfono:"}
        divClassName={"Form-Input-Section"}
        placeholder={"Para poder contactarte"}
        name={"Phone"}
        pattern={"text-input"}
        onChange={onInputChange}
      />
      <div className="contactanos-form-section">
        <label>Mensaje</label>
        <textarea
          className="contactanos-form-message"
          maxLength={2000}
          name="Message"
          onChange={onInputChange}
        />
      </div>
      <CustomButton content={"Enviar"} pattern={"blue"} />
    </form>
  );
}

export default ContactanosForm;
