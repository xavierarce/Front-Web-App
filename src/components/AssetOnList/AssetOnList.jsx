import "./AssetOnlIst.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import LocationIcon from "../../assets/icons/locationIcon.svg";

function AssetOnList({ asset }) {
  const { title, location, details, operation, images, ucid } = asset;
  const mainImage = images.find((image) => image.order === 1);

  return (
    <div className="asset-on-list">
      <div className="asset-on-list-description">
        <div className="asset-on-list-title-address">
          <b className="asset-on-list-title">{title}</b>
          <p className="asset-on-list-address">{location.city},</p>
          <div className="apartment-card-ciudad">
            <img className="icon-location" alt="icon-lupa" src={LocationIcon} />
            <p className="asset-on-list-address">
              {location.address}, {location.zone},{location.city}
            </p>
          </div>
        </div>
        <div className="asset-on-list-caracs">
          <b>Antiguedad: {details.age}</b>
          <b>Cuartos: {details.rooms}</b>
          <b>Parqueo: {details.parking}</b>
          <b>Baños: {details.bathrooms}</b>
        </div>
        <div className="asset-on-list-buttons">
          <b>
            {operation.price.selling && operation.price.selling > 0
              ? `   Venta $${operation.price.selling}`
              : null}
            {operation.price.rental && operation.price.rental > 0
              ? `   Alquiler $${operation.price.rental}`
              : null}
            {operation.price.charges && operation.price.charges > 0
              ? `   Alicuota $${operation.price.charges}`
              : null}
          </b>
          <Link to={`${title.replace(/\s/g, "_")}/${ucid}`}>
            <CustomButton pattern={"blue"} content={"Ir a al bien"} />
          </Link>
        </div>
      </div>
      <Link
        className="asset-on-list-image-container"
        to={`${title.replace(/\s/g, "_")}/${ucid}`}
      >
        <img
          className="asset-on-list-image"
          alt={title}
          src={mainImage.imageUrl}
        />
      </Link>
    </div>
  );
}

export default AssetOnList;
