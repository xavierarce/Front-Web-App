import "./Favoritos.css";
import { ASSETSFAKEDATACOMPLETE } from "../../AssetsFakeData";

const Favorites = ASSETSFAKEDATACOMPLETE.slice(0, 2);


function FavoritosSection() {
  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Favoritos</h2>
      <div className="favorito-page-favoritos-container">

      {Favorites.map((asset, idx) => {
        console.log(Favorites)
        return (
          <div key={idx} className="favorito-page-card">
            <div className="favorito-page-card-description">
              <h2>{asset.title}</h2>
              <p>{asset.address}</p>
              <b>{asset.value}</b>
            </div>
            <img className="favorito-page-img"  alt={`${asset.title}`} src={asset.imageURL}/>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default FavoritosSection;
