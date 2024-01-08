import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./RegisterPopUp.css";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const EmptyRegisterValues = {
  email: "",
  password: "",
  ocupation: "",
  name: "",
  lastname: "",
  phoneNumber: "",
  numberId: "",
  nacionality: "",
};

const RegisterPopUp = () => {
  const { closeRegister, openLogin } = useContext(AuthContext);
  const [registerValues, setRegisterValues] = useState(EmptyRegisterValues);
  const {
    email,
    password,
    ocupation,
    name,
    lastname,
    phoneNumber,
    numberId,
    nacionality,
  } = registerValues;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    alert(JSON.stringify(registerValues));
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
  };

  const handleReturn = () => {
    closeRegister();
    openLogin();
  };

  return (
    <div className="ModalOverlay-Register ">
      <div className="ModalOverlayX-Register">
        <MdOutlineKeyboardBackspace
          onClick={handleReturn}
          className="return-arrow"
          color="blue"
          size={"3rem"}
        />
        <IoCloseCircle
          className="IoCloseCircle-register"
          color="blue"
          size="3rem"
          onClick={closeRegister}
        />
        <div className="ModalContent-Register ">
          <div className="Register-Text-Container">
            <h2 className="authenticate-signin-title">
              Completa el formulario para crear tu cuenta
            </h2>
            <form className="Register-form">
              <FormInput
                pattern={"text-input"}
                label={"Email"}
                type={"email"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={email}
                name={"email"}
              />
              <div className="passwordInput">
                <FormInput
                  pattern={"text-input"}
                  label={"Contraseña"}
                  type={!passwordVisible ? "password" : "text"}
                  divClassName={"Form-Input-Section-Authenticate"}
                  required={true}
                  value={password}
                  onChange={onInputChange}
                  name={"password"}
                />
                <button
                  onClick={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                  className="visibilityButton"
                  type="button"
                >
                  {!passwordVisible ? (
                    <MdOutlineVisibilityOff size={25} color="gray" />
                  ) : (
                    <MdOutlineVisibility size={25} color="blue" />
                  )}
                </button>
              </div>
              <div className="Form-Input-Section-Authenticate">
                <label>Ocupacion</label>
                <select
                  required
                  onChange={onInputChange}
                  value={ocupation}
                  name="ocupation"
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value={"estudiante"} className="text-input">
                    Estudiante
                  </option>
                  <option value={"Corredor"} className="text-input">
                    Corredor
                  </option>
                  <option value={"Ejecutivo"} className="text-input">
                    Ejecutivo
                  </option>
                </select>
              </div>
              <FormInput
                pattern={"text-input"}
                label={"Nombre"}
                type={"text"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={name}
                name={"name"}
              />
              <FormInput
                pattern={"text-input"}
                label={"Apellido"}
                type={"text"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={lastname}
                name={"lastname"}
              />
              <FormInput
                pattern={"text-input"}
                label={"Telefono"}
                type={"tel"}
                specific={"[+]{1}[0-9]{11,14}"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={phoneNumber}
                name={"phoneNumber"}
              />
              <FormInput
                pattern={"text-input"}
                label={"Cedula"}
                type={"tel"}
                specific={"[+]{1}[0-9]{11,14}"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={numberId}
                name={"numberId"}
              />
              <FormInput
                pattern={"text-input"}
                label={"Nacionalidad"}
                type={"text"}
                divClassName={"Form-Input-Section-Authenticate"}
                required={true}
                onChange={onInputChange}
                value={nacionality}
                name={"nacionality"}
              />
              <CustomButton
                content={"Registrarme"}
                pattern={"blue"}
                onButtonClick={handleRegister}
              />
            </form>
          </div>
          <div className="authenticate-register">
            <h2 className="authenticate-signin-title">
              O registrate con Google
            </h2>
            <div className="authenticate-register-buttons">
              <CustomButton
                content={
                  <div className="google-signin-container">
                    <FaGoogle color="orange" /> Google
                  </div>
                }
                pattern={"blue"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopUp;
