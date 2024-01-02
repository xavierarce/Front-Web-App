import EresPropietarioForm from "../../../components/EresPropietarioForm/EresPropietarioForm";
import "./EresPropietario.css";

function EresPropietario() {
  return (
    <div className="eres-propietario-page">
      <div className="top-eres-propietario">
        <div className="top-eres-propietario-texto">
          <div className="eres-porpietario-titulo">¿Eres Propietario?</div>
          <div className="eres-propietario-description">
            <p className="eres-propietario-text">Forma parte de nuestra red.</p>
            <p className="eres-propietario-text">
              Cuéntanos sobre tu apartamento o casa y nos pondremos en contacto en breve para ayudarte con tu bien.
            </p>
          </div>
        </div>
        <img
          className="eres-propietario-image"
          alt={'¿Eres Propietario?'}
          src={"https://www.accountingweb.co.uk/sites/default/files/happyclient.jpg"}
        />
      </div>
      <EresPropietarioForm />
    </div>
  );
}

export default EresPropietario;
