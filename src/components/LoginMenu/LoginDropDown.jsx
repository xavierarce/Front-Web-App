import { useContext } from "react";
import { AuthContext } from "../../Context/Login.context";
import CustomButton from "../CustomButton/CustomButton";
import "./LoginDropdown.css"; // Adjust the path based on your project structure
import { Link } from "react-router-dom";

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
              <span>
                Inicia seción para marcar favoritos y solicitar visitas
              </span>
            </li>
            <hr />
            <Link to={'/cuenta'} className="link-panel-ususario">
              <li className="login-dropdown-items">Tu Espacio</li>
            </Link>
            <Link to={"/cuenta/favoritos"} className="link-panel-ususario">
              <li className="login-dropdown-items">Favoritos</li>
            </Link>
            <Link className="link-panel-ususario">
              <li className="login-dropdown-items">Soporte</li>
            </Link>
            <Link className="link-panel-ususario">
              <li className="login-dropdown-items">Cerrar Seción</li>
            </Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default LoginDropdown;
