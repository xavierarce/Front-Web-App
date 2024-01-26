import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./AssetListPage.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import AssetListComponent from "../../../components/AssetListComponent/AssetListComponent";
import { serverGetAllAssets } from "../../../API/serverFuncions";

const AssetListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [allAssets, setAllAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(allAssets);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const onSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    const searchParamValue = searchInput.trim().toLowerCase();
    const newFilteredAssets = allAssets.filter((asset) => {
      console.log(asset);
      return (
        asset.title.toLowerCase().includes(searchParamValue) ||
        asset.characteristics.description.toLowerCase().includes(searchParamValue)
      );
    });

    setFilteredAssets(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  };

  useEffect(() => {
    fetchAssets(currentPage);
  }, [currentPage]);

  const fetchAssets = async (currentPage) => {
    try {
      const response = await serverGetAllAssets(currentPage);
      const data = await response.json();
      setAllAssets(data.assets);
      setFilteredAssets(data.assets);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching assets:", error);
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
    <div className="asset-list-page">
      <h2 className="slogan">Encuentra tu hogar, sin preocupaciones</h2>
      <div className="search-bar-container">
        <SearchBar
          value={searchInput}
          onChange={onSearchChange}
          onSubmit={handleSubmit}
        />
      </div>

      <div className="asset-list-page-container">
        <AssetListComponent AvailableAssetList={filteredAssets} />
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
        </div>
      </div>
    </div>
  );
};

export default AssetListPage;
