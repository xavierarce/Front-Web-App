import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./Authenticate.css";
import { IoCloseCircle } from "react-icons/io5";

const Authenticate = ({closeLogin}) => {
  return (
    <div className="ModalOverlay ">
      <div className="ModalOverlayX">
        <IoCloseCircle className="IoCloseCircle" color="white" size="3rem" onClick={closeLogin}/>
        <div className="ModalContent ">
          <div className="authenticate-signin">
            <h2 className="authenticate-signin-title">Inicia Sesión</h2>
            <form className="authenticate-form">
              <FormInput
                label={"Email"}
                divClassName={"Form-Input-Section-Authenticate"}
              />
              <FormInput
                label={"Contraseña"}
                type={"password"}
                divClassName={"Form-Input-Section-Authenticate"}
              />
              <CustomButton content={"Ingresa"} pattern={"blue-small"} />
            </form>
            <div className="authenticate-signin-google">
              <b>O inicia sesión con Google</b>
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
          <div className="authenticate-register">
            <h2 className="authenticate-signin-title">Registrate</h2>
            <div className="authenticate-register-buttons">
              <CustomButton content={"Con Email"} pattern={"blue"} />
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

export default Authenticate;
