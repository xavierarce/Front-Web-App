import { Link } from "react-router-dom";
import "./PanelUsuario.css";

function PanelUsuario() {
  return (
    <div className="panel-usuario-container">
      <ul className="panel-usuario-list">
        <Link className="link-panel-ususario" to={""}>
          <li className="panel-usuario-item">Tus datos</li>
        </Link>
        <Link className="link-panel-ususario" to={"favoritos"}>
          <li className="panel-usuario-item">Favoritos</li>
        </Link>
        <Link className="link-panel-ususario" to={"visitas"}>
          <li className="panel-usuario-item">Visitas</li>
        </Link>
        <Link className="link-panel-ususario" to={"preguntas"}>
          <li className="panel-usuario-item activeItem">Preguntas</li>
        </Link>
      </ul>
    </div>
  );
}

export default PanelUsuario;
