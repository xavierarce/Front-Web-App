import AssetOnList from "../AssetOnList/AssetOnList";
import "./AssetListComponent.css";

function AssetListComponent({ AvailableAssetList }) {
  return (
    <div className="asset-list-container">
      {AvailableAssetList.length === 0 ? (
        <h2>Lo siento! Prueba otra ubicación</h2>
      ) : (
        AvailableAssetList.map((asset, idx) => {
          return (
            <AssetOnList
              key={idx}
              asset={asset}
            />
          );
        })
      )}
    </div>
  );
}

export default AssetListComponent;
