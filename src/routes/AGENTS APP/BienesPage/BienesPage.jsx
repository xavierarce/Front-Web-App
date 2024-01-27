import React, { useEffect, useState } from "react";
import "./BienesPage.css";

import { Link, useSearchParams } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { getTokenHSLS } from "../../../API/LocalStorage";
import BienesPageCard from "../../../components/BienesPageCard/BienesPageCard";
import { serverGetAgencyAssets } from "../../../API/serverFuncions";

const BienesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [allAssets, setAllAssets] = useState([]);
  const [totalPages, setTotalPages] = useState(1);


  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    setSearchParams({ buscar: searchInput });
  };

  useEffect(() => {
    getAssets(currentPage, searchParams.get('buscar'));
  }, [currentPage, searchParams]);

  const getAssets = async (currentPage, searchQuery) => {
    const token = getTokenHSLS();
    if (token) {
      try {
        const response = await serverGetAgencyAssets(token,currentPage, searchQuery);
        const data = await response.json();

        setAllAssets(data.assets);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    const buttonsToShow = 5; // You can adjust this number based on your preference

    for (
      let i = Math.max(1, currentPage - Math.floor(buttonsToShow / 2));
      i <= Math.min(totalPages, currentPage + Math.ceil(buttonsToShow / 2));
      i++
    ) {
      pageButtons.push(
        <button
          className={`pagination-button ${i === currentPage ? "active" : ""}`}
          key={i}
          onClick={() => setCurrentPage(i)}
          style={{ fontWeight: i === currentPage ? "bold" : "normal" }}
        >
          {i}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="agency-sub-page">
      <h2 className="agency-sub-page-title">Bienes</h2>
      <Link to={"nuevobien"} className="añadir-button">
        <CustomButton content={"Añadir"} pattern={"blue"} />
      </Link>
      <SearchBar onChange={onSearchChange} onSubmit={handleSubmit} />
      <div className="agency-sub-page-card-container">
        {allAssets.length !== 0 ? (
          allAssets.map((asset, index) => (
            <BienesPageCard key={index} asset={asset} />
          ))
        ) : (
          <div className="UserInterface-loading-spinner-container">
            <div className="loading-spinner" />
          </div>
        )}
      </div>
      <div className="pagination-container">
          {currentPage > 1 && (
            <button
              className="pagination-button"
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
              }
            >
              Anterior
            </button>
          )}
          {renderPageButtons()}
          {currentPage < totalPages && (
            <button
              className="pagination-button"
              onClick={() =>
                setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
              }
            >
              Siguiente
            </button>
          )}
        </div>    </div>
  );
};

export default BienesPage;
