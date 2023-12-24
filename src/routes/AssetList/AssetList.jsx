import AssetOnList from "../../components/AssetOnList/AssetOnList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./AssetList.css";
import Map from "../../assets/Map.png";
import ASSETSFAKEDATA from "../../AssetsFakeData";
import { useState } from "react";

function AssetList() {
  const [searchInput, setSearchInput] = useState("");

  function onSearchChange(e) {
    setSearchInput(e.target.value);
  }

  const filterResults = ASSETSFAKEDATA.filter((data) => {
    return data.title.toLowerCase().includes(searchInput.toLowerCase()) || data.description.toLowerCase().includes(searchInput.toLowerCase())
  });

  return (
    <div className="asset-list-page">
      <h2 className="slogan">Seguro, comodo y nuevo</h2>
      <SearchBar onChange={onSearchChange} />
      <div className="asset-list-and-map">
        <div className="asset-list-container">
          {filterResults.map((asset, idx) => {
            const { title, address, value, imageURL, description ,id} = asset;
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
          })}
        </div>
        <img alt="Map" src={Map} />
      </div>
    </div>
  );
}

export default AssetList;
