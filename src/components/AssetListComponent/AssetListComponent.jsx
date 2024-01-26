import AssetOnList from "../AssetOnList/AssetOnList";
import "./AssetListComponent.css";

function AssetListComponent({ AvailableAssetList }) {
  if (AvailableAssetList.length === 0) {
    return (
      <div>
        <div className="loading-spinner"></div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  return (
    <div>
      {AvailableAssetList.map((asset, idx) => {
        return <AssetOnList key={idx} asset={asset} />;
      })}
    </div>
  );
}

export default AssetListComponent;
