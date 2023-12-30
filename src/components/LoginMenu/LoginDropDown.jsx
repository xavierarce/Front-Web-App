import { useContext } from "react";
import { AuthContext } from "../../Context/Login.context";
import CustomButton from "../CustomButton/CustomButton";
import "./LoginDropdown.css"; // Adjust the path based on your project structure

function LoginDropdown() {
  const { openLogin, setLogOff, currentUser } = useContext(AuthContext);


  const onLogOff = () => {
    setLogOff();
    alert("Has cerrado sesión\n¡Vuelve Pronto!");
  };

  return (
    <div className="login-dropdown-div">
      <ul className="login-dropdown-ul">
        <li className="login-dropdown-li">
          {!currentUser ? (
            <CustomButton
              content={"Inicia Sesión"}
              pattern={"white"}
              onButtonClick={openLogin}
            />
          ) : (
            <CustomButton
              content={`${currentUser.name}`}
              pattern={"white"}
              onButtonClick={onLogOff}
            />
          )}
          <ul className="login-dropdown-list animated">
          <li className="login-dropdown-text">
            <span>Inicia seción para marcar favoritos y solicitar visitas</span>
          </li>
          <hr/>
            <li className="login-dropdown-items">Favoritos</li>
            <li className="login-dropdown-items">Tu Espacio</li>
            <li className="login-dropdown-items">Soporte</li>
            <li className="login-dropdown-items">Cerrar Seción</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LoginDropdown;
