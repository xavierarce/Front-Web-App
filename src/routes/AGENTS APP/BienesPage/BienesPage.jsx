import React, { useState } from "react";
import "./BienesPage.css";

import { Link, useSearchParams } from "react-router-dom";
import { ASSETSFAKEDATACOMPLETE } from "../../../AssetsFakeData";
import CustomButton from "../../../components/CustomButton/CustomButton";
import SearchBar from "../../../components/SearchBar/SearchBar";

const itemsPerPage = 5;

function BienesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [filteredAssets, setFilteredAssets] = useState(ASSETSFAKEDATACOMPLETE);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const assetsToDisplay = filteredAssets.slice(startIndex, endIndex);

  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    const searchParamValue = searchInput.trim().toLowerCase();
    const newFilteredAssets = ASSETSFAKEDATACOMPLETE.filter((asset) => {
      return (
        asset.title.toLowerCase().includes(searchParamValue) ||
        asset.apartamento.descripcion.toLowerCase().includes(searchParamValue)
      );
    });

    setFilteredAssets(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  }

  console.log(filteredAssets);
  return (
    <div className="agency-sub-page">
      <h2 className="agency-sub-page-title">Bienes</h2>
      <Link to={"nuevobien"} className="añadir-button">
        <CustomButton content={"Añadir"} pattern={"blue"} />
      </Link>
      <SearchBar onChange={onSearchChange} onSubmit={handleSubmit} />
      <div className="agency-sub-page-card-container">
        {assetsToDisplay.map((asset, index) => {
          const { id, title, address, value, imageURL, owner } = asset;
          return (
            <div key={index} className="agency-sub-page-card">
              <div className="agencysub-card-description ">
                <h2 className="text-0-margin">{title}</h2>
                <p className="text-0-margin">{address}</p>
                <b className="text-0-margin">{value}</b>
                <div className="agencysub-boton-y-propietario">
                  <Link to={`bien/${id}`}>
                    <CustomButton pattern={"blue"} content={"Editar"} />
                  </Link>
                  <Link target="_blank" to={`/bienes/${id}`}>
                    <CustomButton pattern={"white"} content={"Ver"} />
                  </Link>
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
          { length: Math.ceil(filteredAssets.length / itemsPerPage) },
          (_, index) => (
            <CustomButton
              key={index}
              pattern={`white ${currentPage === index + 1 ? "active" : null}`}
              onButtonClick={() => handlePageChange(index + 1)}
              content={index + 1}
            />
          )
        )}
      </div>
    </div>
  );
}

export default BienesPage;
