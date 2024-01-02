import { Link, useLocation } from "react-router-dom";
import "./PanelAgencia.css";

function PanelAgencia() {
  const location = useLocation().pathname;
  console.log(location);

  return (
    <div className="panelagencia-container">
      <Link className="link-panelagencia" to={''}>
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin" ? "panel-item-active" : null
          }`}
        >
          Bienes
        </h2>
      </Link>
      <Link className="link-panelagencia" to={'propietarios'}>
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/propietarios"
              ? "panel-item-active"
              : null
          }`}
        >
          Propietarios
        </h2>
      </Link>
      <Link className="link-panelagencia">
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/preguntas" ? "panel-item-active" : null
          }`}
        >
          Preguntas
        </h2>
      </Link>
      <Link className="link-panelagencia">
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/visitas" ? "panel-item-active" : null
          }`}
        >
          Visitas
        </h2>
      </Link>
      <Link className="link-panelagencia">
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/articulos" ? "panel-item-active" : null
          }`}
        >
          Articulos
        </h2>
      </Link>
      <Link className="link-panelagencia">
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/candidatos" ? "panel-item-active" : null
          }`}
        >
          Candidatos
        </h2>
      </Link>
      <Link className="link-panelagencia">
        <h2
          className={`panelagencia-item ${
            location === "/agenciaadmin/agentes" ? "panel-item-active" : null
          }`}
        >
          Agentes
        </h2>
      </Link>
    </div>
  );
}

export default PanelAgencia;
