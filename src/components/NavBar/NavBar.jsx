import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBar.css";
import HogarSeguro from "../../assets/Logo-Completo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/Login.context";

function NavBar() {
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");
  const { openLogin, setLogOff, currentUser } = useContext(AuthContext);

  const onLogOff = () => {
    setLogOff();
    alert("Has cerrado sesión\n¡Vuelve Pronto!");
  };

  return (
    <div className="NavBar">
      <img
        src={HogarSeguro}
        alt="Hogar Seguro"
        onClick={navigateHome}
        className="NavBar-Logo"
      />
      <div className="Nav-Sections">
        <Link className="NavBar-Sections-Item" to={"/bienes"}>
          Bienes disponibles
        </Link>
        <Link to={"quienes-somos"} className="NavBar-Sections-Item">
          Quiénes somos
        </Link>
        <Link to={"articulos"} className="NavBar-Sections-Item">
          Artículos
        </Link>
        <Link to={"contactanos"} className="NavBar-Sections-Item">
          Contáctanos
        </Link>
      </div>
      <div className="NavBar-Buttons">
        <Link to={"/eres-propietario"}>
          <CustomButton content={"¿Eres propietario?"} pattern={"blue"} />
        </Link>
        {!currentUser ? (
          <CustomButton
            content={"Inicia Sesión"}
            pattern={"white"}
            onButtonClick={openLogin}
          />
        ) : (
          <CustomButton
            content={"Cerrar Sesión"}
            pattern={"white"}
            onButtonClick={onLogOff}
          />
        )}
      </div>
    </div>
  );
}

export default NavBar;
