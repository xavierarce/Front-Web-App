import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBarAgency.css";
import HogarSeguro from "../../assets/Logo-Completo.svg";
import LoginDropdown from "../LoginMenu/LoginDropDown";

const NavBarAgency = () => {
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

      <div className="NavBar-Buttons">
        <Link to={"/eres-propietario"}>
          <CustomButton content={"¿Eres propietario?"} pattern={"blue"} />
        </Link>
        <LoginDropdown />
      </div>
    </div>
  );
};

export default NavBarAgency;
