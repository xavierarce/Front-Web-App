import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ASSETSFAKEDATA } from "../../AssetsFakeData";
import "./AssetListPage.css";
import AssetListComponent from "../../components/AssetListComponent/AssetListComponent";
import SelectedItem from "../../components/SelectedItem/SelectedItem";

function AssetListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );
  const [filteredAssets, setFilteredAssets] = useState(ASSETSFAKEDATA);

  console.log(searchInput);
  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Update the filter only when the search form is submitted
    const searchParamValue = searchInput.trim().toLowerCase();
    const newFilteredAssets = ASSETSFAKEDATA.filter(
      (asset) =>
        asset.title.toLowerCase().includes(searchParamValue) ||
        asset.description.toLowerCase().includes(searchParamValue)
    );

    setFilteredAssets(newFilteredAssets);
    setSearchParams({ buscar: searchInput });
  }

  return (
    <div className="asset-list-page">
      <h2 className="slogan">Encuentra tu hogar, sin preocupaciones</h2>
      <SearchBar
        value={searchInput}
        onChange={onSearchChange}
        onSubmit={handleSubmit}
      />
      <div className="asset-list-and-map">
        <div className="asset-list-page-container">
          <AssetListComponent AvailableAssetList={filteredAssets} />
        </div>
        <div className="asset-list-description-container">
          <SelectedItem />
        </div>
      </div>
    </div>
  );
}

export default AssetListPage;
