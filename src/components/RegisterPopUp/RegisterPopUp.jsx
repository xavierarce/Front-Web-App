// import { FaGoogle } from "react-icons/fa";
import CustomButton from "../CustomButton/CustomButton";
import FormInput from "../FormInput/FormInput";
import "./RegisterPopUp.css";
import { IoCloseCircle } from "react-icons/io5";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Login.context";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";

const EmptyRegisterValues = {
  email: "",
  password: "",
  occupation: "",
  name: "",
  lastname: "",
  phoneNumber: "",
  numberId: "",
  nationality: "",
};

const RegisterPopUp = () => {
  const { closeRegister, openLogin } = useContext(AuthContext);
  const [registerValues, setRegisterValues] = useState(EmptyRegisterValues);
  const [isLoading, setIsLoading]  = useState(false);
  const {
    email,
    password,
    occupation,
    name,
    lastname,
    phoneNumber,
    numberId,
    nationality,
  } = registerValues;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleReturn = () => {
    closeRegister();
    openLogin();
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    try {
      const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registerValues,
        }),
      });
      const data = await response.json();
      console.log(response);
      console.log(data);
      if (response.ok) {
        alert("Cuenta creada! Ahora inicia secion");
        setIsLoading(false)
        handleReturn();
      } else {
        throw new Error(data.error);
      }
    } catch (error) {
      setIsLoading(false)
      if (error.message.includes("Missing required fields"))
        return alert("Porfavor completa todos los campos");
      if (error.message === "Invalid Email Format")
        return alert("Porfavor Ingresa un email valido");
      if (
        error.message ===
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit"
      )
        return alert(
          "La contraseña debe tener al menos 8 caracteres de longitud y contener al menos una letra mayúscula, una letra minúscula y un número."
        );
      if (error.message === "Número de teléfono debe tener 10 dígitos")
        return alert(error.message);
      if (error.message === "Número de identificación debe tener 10 dígitos")
        return alert(error.message);

      console.log(error.message);
    }
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterValues({ ...registerValues, [name]: value });
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
                  value={occupation}
                  name="occupation"
                >
                  <option value="" disabled>
                    Selecciona
                  </option>
                  <option value={"estudiante"} className="text-input">
                    Estudiante
                  </option>
                  <option value={"Ejecutivo"} className="text-input">
                    Ejecutivo
                  </option>
                  <option value={"Corredor"} className="text-input">
                    Corredor
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
                value={nationality}
                name={"nationality"}
              />
              <CustomButton
                content={"Registrarme"}
                pattern={"blue"}
                onButtonClick={handleRegister}
              />
            </form>
            {isLoading ? <LoadingSpinner /> : null }
          </div>
          {/* <div className="authenticate-register">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RegisterPopUp;
