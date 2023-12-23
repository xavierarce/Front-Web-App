import AssetOnList from "../../components/AssetOnList/AssetOnList";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./AssetList.css";

function AssetList() {
  return (
    <div className="AssetListContainer">
      <div className="slogan">
        <div className="seguro-comodo-y">Seguro, comodo y nuevo</div>
      </div>
      <SearchBar />
      <div className="lista-y-mapa">
      <AssetOnList/>

      </div>
      <h2>sd</h2>
    </div>
  );
}

export default AssetList;
