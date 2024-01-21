import "./ApartmentCard.css";
import Location from "../../assets/icons/locationIcon.svg";
import { Link } from "react-router-dom";

const ApartmentCard = ({ asset }) => {
  const { title, location, imageUrl, operation, ucid } = asset;
  console.log(ucid);

  return (
    <Link
      className="apartment-card-Link"
      to={`/bienes/${title.replace(/ /g, "_")}/${ucid}`}
    >
      <div className="apartment-card">
        <img className="apartment-card-image" alt={title} src={imageUrl} />
        <div className="apartment-card-description-container">
          <div className="apartment-card-title">{title}</div>
          <div className="apartment-card-description">{location.address} </div>
          <div className="apartment-card-ciudad">
            <img className="icon-location" alt="icon-lupa" src={Location} />
            <div className="apartment-card-description">{location.city}</div>
          </div>
          <p className="apartment-card-description">
            {operation.price.selling && operation.price.selling > 0
              ? `Venta $${operation.price.selling} -`
              : null}
            {operation.price.rental && operation.price.rental > 0
              ? `Alquiler $${operation.price.rental} -`
              : null}
            {operation.price.charges && operation.price.charges > 0
              ? ` Alicuota $${operation.price.charges}`
              : null}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ApartmentCard;
