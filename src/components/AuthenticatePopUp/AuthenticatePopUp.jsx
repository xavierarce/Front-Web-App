import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./AuthenticatePopUp.css";
import { IoCloseCircle } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Context/Login.context";

const AuthenticatePopUp = () => {
  const { closeLogin, setLogIn } = useContext(AuthContext);

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    try {
      const {name} =await setLogIn();
      alert(`Bienvenido, ${name}!`);
      closeLogin()
    } catch (error) {
      alert(`Error: ${error}`);
    }
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
              />
              <FormInput
                label={"Contraseña"}
                type={"password"}
                divClassName={"Form-Input-Section-Authenticate"}
              />
              <CustomButton content={"Ingresa"} pattern={"blue-small"}  />
            </form>
            <div className="authenticate-signin-google">
              <b>O inicia sesión con Google</b>
              <CustomButton
                content={
                  <div className="google-signin-container">
                    <FaGoogle color="orange" /> Google
                  </div>
                }
                pattern={"blue"} onButtonClick={onSignInSubmit}
              />
            </div>
          </div>
          <div className="authenticate-register">
            <h2 className="authenticate-signin-title">Registrate</h2>
            <div className="authenticate-register-buttons">
              <CustomButton content={"Con Email"} pattern={"blue"}  onButtonClick={onSignInSubmit}/>
              <CustomButton
              onButtonClick={onSignInSubmit}
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

export default AuthenticatePopUp;
