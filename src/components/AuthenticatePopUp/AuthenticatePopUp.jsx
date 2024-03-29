// import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./AuthenticatePopUp.css";
import { IoCloseCircle } from "react-icons/io5";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import { serverLoginUser } from "../../API/serverFuncions";

const EmptyLoginValues = {
  email: "",
  password: "",
};

const AuthenticatePopUp = () => {
  const { closeLogin, setCurrentUser, openRegister } =
    useContext(AuthContext);
  const [loginValues, setLoginValues] = useState(EmptyLoginValues);
  const { email, password } = loginValues;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const onSignInSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
      setIsLoading(false);
      return alert("Porfavor, completa todos los campos");
    }

    try {
      const response = await serverLoginUser(email,password)

      const data = await response.json();
      if (response.ok) {
        setCurrentUser(data.userInfo);
        localStorage.setItem("hogar-seguro", data.accessToken);
        setIsLoading(false);
        closeLogin();
      } else {
        setIsLoading(false);
        throw new Error(data.error);
      }
    } catch (error) {
      setIsLoading(false);
      if (error.message === "Incorrect Credential")
        return alert("Credenciales Incorrectas");
      console.log(error.message);
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
                <FormInput
                  label={"Contraseña"}
                  type={!passwordVisible ? "password" : "text"}
                  divClassName={"Form-Input-Section-Authenticate"}
                  pattern={"text-input"}
                  onChange={onInputChange}
                  name={"password"}
                  value={password}
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
              <CustomButton content={"Ingresa"} pattern={"blue-small"} />
            </form>
            {isLoading ? <LoadingSpinner /> : null}

            {/* <div className="authenticate-signin-google">
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
            </div> */}
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
