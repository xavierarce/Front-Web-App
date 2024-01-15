import "./AssetOnlIst.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";

function AssetOnList({ asset }) {
  const { title, location, details, value, images, ucid } = asset;

  const mainImage = images.find((image) => image.order === 0);

  console.log(asset);

  return (
    <div className="asset-on-list">
      <div className="asset-on-list-description">
        <div className="asset-on-list-title-address">
          <b className="asset-on-list-title">{title}</b>
          <p className="asset-on-list-address">{location.city}</p>
          <p className="asset-on-list-address">{location.address}</p>
        </div>
        <div className="asset-on-list-caracs">
          <b>Antiguedad: {details.age}</b>
          <b>Cuartos: {details.rooms}</b>
          <b>Parqueo: {details.parking}</b>
          <b>Baños: {details.bathrooms}</b>
        </div>
        <div className="asset-on-list-buttons">
          <div>
            <b>{value}</b>
          </div>
          <Link to={`${title.replace(/\s/g, "-")}/${ucid}`}>
            <CustomButton pattern={"blue"} content={"Ir a al bien"} />
          </Link>
        </div>
      </div>
      <Link
        className="asset-on-list-image-container"
        to={`${title.replace(/\s/g, "-")}`}
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
