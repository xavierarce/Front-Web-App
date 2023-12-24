import "./ApartmentCard.css";
import Location from "../../assets/icons/locationIcon.svg";

function ApartmentCard({ image }) {
  return (
    <div className="apartment-card">
      <img className="apartment-card-image" alt="Rectangle" src={image} />
      <div className="apartment-card-title">Titulo del apartamento</div>
      <div className="apartment-card-description">
        Direccion del Apartamento
      </div>
      <div className="apartment-card-ciudad">
        <img className="icon-location" alt="icon-lupa" src={Location} />
        <div className="ciudad-teext">Ciudad</div>
      </div>
    </div>
  );
}

export default ApartmentCard;
