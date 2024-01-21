import { Link, useLocation } from "react-router-dom";
import "./PanelUsuario.css";

function PanelUsuario() {
  const location = useLocation();

  return (
    <div className="panel-usuario-container">
      <ul className="panel-usuario-list">
        <Link className="link-panel-ususario" to={""}>
          <li className={`panel-usuario-item ${location.pathname === '/cuenta' ? 'activeItem' : ''}`}>Tus datos</li>
        </Link>
        <Link className="link-panel-ususario" to={"favoritos"}>
          <li className={`panel-usuario-item ${location.pathname === '/cuenta/favoritos' ? 'activeItem' : ''}`}>Favoritos</li>
        </Link>
        <Link className="link-panel-ususario" to={"visitas"}>
          <li className={`panel-usuario-item ${location.pathname === '/cuenta/visitas' ? 'activeItem' : ''}`}>Visitas</li>
        </Link>
        {/* <Link className="link-panel-ususario" to={"preguntas"}>
          <li className={`panel-usuario-item ${location.pathname === '/cuenta/preguntas' ? 'activeItem' : ''}`}>Preguntas</li>
        </Link> */}
      </ul>
    </div>
  );
}

export default PanelUsuario;
