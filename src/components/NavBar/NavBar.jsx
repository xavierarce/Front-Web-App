import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBar.css";
import HogarSeguro from "../../assets/Logo-Completo.svg";
import LoginDropdown from "../LoginMenu/LoginDropDown";

function NavBar() {
  const navigate = useNavigate();
  const navigateHome = () => navigate("/");

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
        <LoginDropdown />
      </div>
    </div>
  );
}

export default NavBar;
