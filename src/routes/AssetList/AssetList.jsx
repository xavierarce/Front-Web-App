import AssetOnList from "../../components/AssetOnList/AssetOnList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./AssetList.css";
import Map from "../../assets/Map.png";
import ASSETSFAKEDATA from "../../AssetsFakeData";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function AssetList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("buscar") || ""
  );

  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  const filterResults = ASSETSFAKEDATA.filter((data) => {
    const searchParamValue = searchParams.get("buscar");

    // If searchParamValue is empty, return true to include all items
    if (searchParamValue === null || searchParamValue.trim() === "") {
      return true;
    }

    // Otherwise, filter based on the search parameters
    return (
      data.title.toLowerCase().includes(searchParamValue.toLowerCase()) ||
      data.description.toLowerCase().includes(searchParamValue.toLowerCase())
    );
  });

  function handleSubmit(event) {
    event.preventDefault();
    setSearchParams({ buscar: searchInput });
  }

  return (
    <div className="asset-list-page">
      <h2 className="slogan">Seguro, comodo y nuevo</h2>
      <SearchBar
        value={searchInput}
        onChange={onSearchChange}
        onSubmit={handleSubmit}
      />
      <div className="asset-list-and-map">
        <div className="asset-list-container">
          {filterResults.length===0 ? (
            <h2>Lo siento! Prueba otra ubicación</h2>
          ) : (
            filterResults.map((asset, idx) => {
              const { title, address, value, imageURL, description, id } =
                asset;
              return (
                <AssetOnList
                  key={idx}
                  title={title}
                  description={description}
                  address={address}
                  value={value}
                  imgUrl={imageURL}
                  id={id}
                />
              );
            })
          )}
        </div>
        <img alt="Map" src={Map} />
      </div>
    </div>
  );
}

export default AssetList;
