import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./AssetListPage.css";
import SearchBar from "../../../components/SearchBar/SearchBar";
import AssetListComponent from "../../../components/AssetListComponent/AssetListComponent";

function AssetListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [allAssets, setAllAssets] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(allAssets);

  console.log(searchInput);
  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    const searchParamValue = searchInput.trim().toLowerCase();
    const newFilteredAssets = allAssets.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchParamValue) ||
        asset.description.toLowerCase().includes(searchParamValue)
    );

    setFilteredAssets(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  }

  useEffect(() => {
    const getAssets = async () => {
      try {
        const response = await fetch("http://localhost:8000/assets");
        const data = await response.json();

        setAllAssets(data.assets);
        setFilteredAssets(data.assets);
      } catch (error) {}
    };
    getAssets();
  }, []);

  return (
    <div className="asset-list-page">
      <h2 className="slogan">Encuentra tu hogar, sin preocupaciones</h2>
      <SearchBar
        value={searchInput}
        onChange={onSearchChange}
        onSubmit={handleSubmit}
      />
      <div className="asset-list-page-container">
        <AssetListComponent AvailableAssetList={filteredAssets} />
      </div>
    </div>
  );
}

export default AssetListPage;
