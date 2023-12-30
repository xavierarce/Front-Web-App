import "./AssetOnlIst.css";
import WifiIcon from "../../assets/icons/wifi-svgrepo-com.svg";
import CustomButton from "../CustomButton/CustomButton";
import { Link,} from "react-router-dom";
import { useContext } from "react";
import { AssetsContext } from "../../Context/Assets.context";

function AssetOnList({ asset }) {
  const { title, address, value, imageURL, id } = asset;
  const { selectedAsset, setSelectedAsset } = useContext(AssetsContext);

  function onPreview() {
    setSelectedAsset(asset);
  }

  return (
    <div
      className={`asset-on-list ${
        selectedAsset && id === selectedAsset.id ? "asset-active" : ""
      }`}
    >
      <div className="asset-on-list-description">
        <div className="asset-on-list-title-address">
          <b className="asset-on-list-title">{title}</b>
          <p className="asset-on-list-address">{address}</p>
        </div>
        <div className="icons">
          {Array.from({ length: 10 }).map((_, index) => (
            <img
              className="asset-on-list-icon"
              key={index}
              src={WifiIcon}
              alt={`icons${index}`}
            />
          ))}
        </div>
        <div className="asset-on-list-buttons">
          <div>
            <b>{value}</b>
          </div>
          <div className="asset-breve-button">
            <CustomButton
              pattern={"white"}
              content={"Ficha Tecnica"}
              onButtonClick={onPreview}
            />
          </div>
          <Link to={`${id}`}>
            <CustomButton
              pattern={"blue"}
              content={"Ir a al bien"}
            />
          </Link>
        </div>
      </div>
      <div className="asset-on-list-image-container">
        <img className="asset-on-list-image" alt={imageURL} src={imageURL} />
      </div>
    </div>
  );
}

export default AssetOnList;
