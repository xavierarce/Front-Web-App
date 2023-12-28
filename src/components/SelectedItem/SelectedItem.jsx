import { useContext } from "react";
import "./SelectedItem.css";
import { AssetsContext } from "../../Context/Assets.context";

function SelectedItem() {
  const { selectedAsset } = useContext(AssetsContext);

  if (!selectedAsset) {
    return (
      <div className="selected-asset-container">
        <h4>
          Clickea <b>Muestra</b> y mira un preview
        </h4>
        <h4>Adeltante!</h4>
        <h4>Elige entre nuestro catalogo!</h4>
      </div>
    );
  }

  const { title, imageURL, description, city, value, address } = selectedAsset;

  return (
    <div className="selected-asset-container">
      <h2>{title}</h2>
      <img alt={title} src={imageURL} />
      <h2>{address}</h2>
      <p>{description}</p>
      <h4>{city}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default SelectedItem;
