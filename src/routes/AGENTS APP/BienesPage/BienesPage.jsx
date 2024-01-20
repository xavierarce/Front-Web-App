import React, { useEffect, useState } from "react";
import "./BienesPage.css";

import { Link, useSearchParams } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import SearchBar from "../../../components/SearchBar/SearchBar";
import { getTokenHSLS } from "../../../API/LocalStorage";
import BienesPageCard from "../../../components/BienesPageCard/BienesPageCard";

const itemsPerPage = 5;

function BienesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [allAssets, setAllAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(allAssets);

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
    const newFilteredAssets = allAssets.filter((asset) => {
      console.log("FILTER", asset);
      return (
        asset.title.toLowerCase().includes(searchParamValue) ||
        asset.location.city.toLowerCase().includes(searchParamValue) ||
        asset.owner.toLowerCase().includes(searchParamValue)
      );
    });

    setFilteredAssets(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  }

  useEffect(() => {
    const getAssets = async () => {
      const token = getTokenHSLS();
      if (token) {
        try {
          const response = await fetch("http://localhost:8000/assets/agency", {
            headers: { authorization: `Bearer ${token}` },
          });
          const data = await response.json();

          setAllAssets(data.assets);
          setFilteredAssets(data.assets);
        } catch (error) {
          console.error(error);
        }
      }
    };
    getAssets();
  }, []);

  return (
    <div className="agency-sub-page">
      <h2 className="agency-sub-page-title">Bienes</h2>
      <Link to={"nuevobien"} className="añadir-button">
        <CustomButton content={"Añadir"} pattern={"blue"} />
      </Link>
      <SearchBar onChange={onSearchChange} onSubmit={handleSubmit} />
      <div className="agency-sub-page-card-container">
        {assetsToDisplay.map((asset, index) => (
          <BienesPageCard key={index} asset={asset} />
        ))}
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
