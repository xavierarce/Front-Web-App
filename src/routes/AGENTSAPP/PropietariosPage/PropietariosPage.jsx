import React, { useState } from "react";
import "./PropietariosPage.css";

import  Usuario from '../../../assets/Usuario foto.svg'

import { Link, useSearchParams } from "react-router-dom";
import { ownersData } from "../../../AssetsFakeData";
import CustomButton from "../../../components/CustomButton/CustomButton";
import SearchBar from "../../../components/SearchBar/SearchBar";

const itemsPerPage = 5;

function PropietariosPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [filteredOwners, setFilteredOwners] = useState(ownersData);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const ownersToDisplay = filteredOwners.slice(startIndex, endIndex);

  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    const searchParamValue = searchInput.trim().toLowerCase();
    const newFilteredAssets = ownersData.filter((owner) => {
      return owner.name.toLowerCase().includes(searchParamValue);
    });

    setFilteredOwners(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  }

  console.log(ownersToDisplay);
  return (
    <div className="agency-sub-page">
      <h2 className="agency-sub-page-title">Propietarios</h2>
      <Link to={"nuevobien"} className="añadir-button">
        <CustomButton content={"Añadir"} pattern={"blue"} />
      </Link>
      <SearchBar onChange={onSearchChange} onSubmit={handleSubmit} />
      <div className="agency-sub-page-card-container">
        {ownersToDisplay.map((owner, index) => {
          const { name, phoneNumber } = owner;
          return (
            <div key={index} className="agency-sub-page-card-owner">
              <div className="agencysub-card-description">
                <h2 className="text-0-margin">{name}</h2>
                <p className="text-0-margin"> Telefono: {phoneNumber}</p>
                <p className="text-0-margin">Bienes DISPONIBLE</p>
                <p className="text-0-margin">Bienes DISPONIBLE</p>
                {/* <b>{value}</b> */}
                <div className="agencysub-boton-y-propietario">
                  <CustomButton pattern={"blue"} content={"Editar"} />
                  <CustomButton pattern={"white"} content={"Ver"} />
                  {/* <p>{owner}</p> */}
                </div>
              </div>
              <img className="agencysub-image-owner" alt={Usuario} src={Usuario} />
            </div>
          );
        })}
      </div>
      <div className="pagination">
        {Array.from(
          { length: Math.ceil(filteredOwners.length / itemsPerPage) },
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

export default PropietariosPage;
