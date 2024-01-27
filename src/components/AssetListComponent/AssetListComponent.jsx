import AssetOnList from "../AssetOnList/AssetOnList";
import "./AssetListComponent.css";

const AssetListComponent = ({ AvailableAssetList, noMatches }) => {
  if (noMatches) {
    return (
      <div>
        <p>No hemos encontrado propiedades que coincidan con tu criterio de búsqueda.</p>
        <p>¡Prueba con otro término o ajusta tus filtros para encontrar la propiedad perfecta para ti!</p>
      </div>
    );
  }


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
};

export default AssetListComponent;
