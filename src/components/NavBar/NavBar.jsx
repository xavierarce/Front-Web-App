import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBar.css";
import HogarSeguro from "../../assets/Hogar Seguro.svg";

function NavBar() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");

  return (
    <div className="NavBar">
      <img
        src={HogarSeguro}
        alt="Hogar Seguro"
        onClick={goHome}
        className="NavBar-Logo"
      />
      {/* <div className="Nav-Links"> */}
      <div className="Nav-Sections">
        <Link className="NavBar-Sections-Item" to={"/bienes"}>
          Bienes disponibles
        </Link>
        <Link className="NavBar-Sections-Item">Quienes somos</Link>
        <Link className="NavBar-Sections-Item">Articulos</Link>
        <Link className="NavBar-Sections-Item">Contactanos</Link>
      </div>
      <div className="NavBar-Buttons">
        <CustomButton content={"Eres propietario?"} pattern={"blue"} />
        <CustomButton content={"Inicia Secion"} pattern={"white"} />
      </div>
      {/* </div> */}
    </div>
  );
}

export default NavBar;
