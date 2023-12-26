import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBar.css";
import HogarSeguro from "../../assets/Hogar Seguro.svg";
import { useContext } from "react";
import { AuthContext } from "../../Context/Login.context";

function NavBar() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  const {openLogin, setLogOff, currentUser} = useContext(AuthContext)

  const onLogOff = ()=>{
    setLogOff()
    alert('Has cerrado seción \nVuelve Pronto!')
  }

  return (
    <div className="NavBar">
      <img
        src={HogarSeguro}
        alt="Hogar Seguro"
        onClick={goHome}
        className="NavBar-Logo"
      />
      <div className="Nav-Sections">
        <Link className="NavBar-Sections-Item" to={"/bienes"}>
          Bienes disponibles
        </Link>
        <Link className="NavBar-Sections-Item">Quienes somos</Link>
        <Link className="NavBar-Sections-Item">Articulos</Link>
        <Link className="NavBar-Sections-Item">Contactanos</Link>
      </div>
      <div className="NavBar-Buttons">
        <Link to={'/eres-propietario'}>
          <CustomButton content={"¿Eres propietario?"} pattern={"blue"} />
        </Link>
          {!currentUser ?
            <CustomButton content={"Inicia Secion"} pattern={"white"} onButtonClick={openLogin}/>
:
<CustomButton content={"Cerrar Secion"} pattern={"white"} onButtonClick={onLogOff}/>

          }
      </div>
    </div>
  );
}

export default NavBar;
