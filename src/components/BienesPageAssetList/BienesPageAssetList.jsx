import React from "react";
import "./BienesPageAssetList.css";
import BienesPageCard from "../BienesPageCard/BienesPageCard";

const BienesPageAssetList = ({ noMatches, allAssets, isLoading }) => {
  if (allAssets.length === 0) {
    <div>
      <div className="loading-spinner" />
      <h2>Cargando...</h2>
    </div>;
  }

  if (noMatches) {
    return (
      <div>
        <p>
          No hemos encontrado propiedades que coincidan con tu criterio de
          búsqueda.
        </p>
      </div>
    );
  }

  return allAssets.map((asset, index) => (
    <div className="allAssetsBienesPageContainer" key={index}>
      {isLoading ? (
        <div>
          <div className="loading-spinner"></div>
          <h2>Buscando...</h2>
        </div>
      ) : null}
      <BienesPageCard key={index} asset={asset} />
    </div>
  ));
};

export default BienesPageAssetList;
