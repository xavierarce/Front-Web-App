import React, { useState } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./BienesPage.css";

import { ASSETSFAKEDATACOMPLETE } from "../../AssetsFakeData";
import { Link } from "react-router-dom";

const itemsPerPage = 5;

function BienesPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const assetsToDisplay = ASSETSFAKEDATACOMPLETE.slice(startIndex, endIndex);

  return (
    <div className="agency-sub-page">
      <h2 className="agency-sub-page-title">Bienes</h2>
      <Link to={'nuevobien'} className="añadir-button">
        <CustomButton content={"Añadir"} pattern={"blue"} />
      </Link>
      <SearchBar />
      <div className="agency-sub-page-card-container">
        {assetsToDisplay.map((asset, index) => {
          const { title, address, value, imageURL, owner } = asset;
          return (
            <div key={index} className="agency-sub-page-card">
              <div className="agencysub-description">
                <h2>{title}</h2>
                <p>{address}</p>
                <b>{value}</b>
                <div className="agencysub-boton-y-propietario">
                  <CustomButton pattern={"blue"} content={"Editar"} />
                  <CustomButton pattern={"white"} content={"Ver"} />
                  <p>{owner}</p>
                </div>
              </div>
              <img className="agencysub-image" alt={title} src={imageURL} />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(ASSETSFAKEDATACOMPLETE.length / itemsPerPage) },
          (_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active" : null}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}

export default BienesPage;
