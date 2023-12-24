import "./EresPropietario.css";
import Eres from "./Eres Ppp.png";

function EresPropietario() {
  return (
    <div className="top-eres-propietario">
      <div className="top-eres-propietario-texto">
        <div className="eres-porpietario-titulo">Eres Propietario?</div>
        <div className="eres-propietario-description">
          <p className="eres-propietario-text">Forma parte de nuestra red de beneficiarios.</p>
          <p className="eres-propietario-text">Dejanos un mensaje y nos contactaremos contigo!</p>
        </div>
      </div>
        <img className="eres-propietario-image" alt={Eres} src={Eres} />
    </div>
  );
}

export default EresPropietario;
