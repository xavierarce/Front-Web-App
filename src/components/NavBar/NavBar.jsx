import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../CustomButton/CustomButton";
import "./NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className="NavBar">
      <h2 onClick={()=>{navigate('/')}} className="NavBar-Name">Hogar Seguro</h2>
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
