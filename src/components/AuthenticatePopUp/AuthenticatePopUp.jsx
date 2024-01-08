import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./AuthenticatePopUp.css";
import { IoCloseCircle } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const EmptyLoginValues = {
  email: "",
  password: "",
};

const AuthenticatePopUp = () => {
  const { closeLogin, setLogIn, openRegister } = useContext(AuthContext);
  const [loginValues, setLoginValues] = useState(EmptyLoginValues);
  const { email, password } = loginValues;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return alert("Porfavor, completa todos los campos");

    try {
      const response = await fetch("http://localhost:8000", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: { email: email, password: password },
      });

      const data = await response.json();
      console.log(data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginValues({ ...loginValues, [name]: value });
  };

  const handleRegister = () => {
    closeLogin();
    openRegister();
  };

  return (
    <div className="ModalOverlay ">
      <div className="ModalOverlayX">
        <IoCloseCircle
          className="IoCloseCircle"
          color="white"
          size="3rem"
          onClick={closeLogin}
        />
        <div className="ModalContent ">
          <div className="authenticate-signin">
            <h2 className="authenticate-signin-title">Inicia Sesión</h2>
            <form className="authenticate-form" onSubmit={onSignInSubmit}>
              <FormInput
                label={"Email"}
                divClassName={"Form-Input-Section-Authenticate"}
                onChange={onInputChange}
                name={"email"}
                value={email}
                pattern={"text-input"}
              />
              <div className="passwordInput">
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
                <FormInput
                  label={"Contraseña"}
                  type={"password"}
                  divClassName={"Form-Input-Section-Authenticate"}
                  pattern={"text-input"}
                  onChange={onInputChange}
                  name={"password"}
                  value={password}
                />
              </div>
              <CustomButton content={"Ingresa"} pattern={"blue-small"} />
            </form>
            <div className="authenticate-signin-google">
              <b>O ingresa con Google</b>
              <CustomButton
                content={
                  <div className="google-signin-container">
                    <FaGoogle color="orange" /> Google
                  </div>
                }
                pattern={"blue"}
                onButtonClick={onSignInSubmit}
              />
            </div>
          </div>
          <div className="authenticate-register">
            <h2 className="authenticate-signin-title">No tienes cuenta?</h2>
            <div className="authenticate-register-buttons">
              <CustomButton
                content={"Registrate"}
                pattern={"blue"}
                onButtonClick={handleRegister}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthenticatePopUp;
