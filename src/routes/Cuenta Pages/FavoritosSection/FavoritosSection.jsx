import "./FavoritosSection.css";
import { ASSETSFAKEDATACOMPLETE } from "../../../AssetsFakeData";
import { useEffect, useState } from "react";
import { getTokenHSLS } from "../../../API/LocalStorage";

const Favorites = ASSETSFAKEDATACOMPLETE.slice(0, 1);

const FavoritosSection = () => {
  const [favoriteAssets, setFavoriteAssets] = useState([]);

  console.log("1", favoriteAssets);

  useEffect(() => {
    const getFavorites = async () => {
      const token = getTokenHSLS("hogar-seguro");
      if (token) {
        try {
          const response = await fetch(
            `http://localhost:8000/favorite/getUserFavorites`,
            {
              headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await response.json();
          if (data.userFavoriteAssets) {
            return setFavoriteAssets(data.userFavoriteAssets);
          } else {
            return setFavoriteAssets([]);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };

    getFavorites();
  }, []);

  if (favoriteAssets && favoriteAssets.length === 0) {
    return (
      <div className=" favoritos-section">
        <h2 className="favoritos-page-title">Tus Favoritos</h2>
        <p>Aun no has marcado favoritos</p>
      </div>
    );
  }
  console.log("2nice", favoriteAssets.length);

  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Favoritos</h2>
      <div className="favorito-page-favoritos-container">
        {favoriteAssets.map((asset, idx) => {
          console.log("3", asset);
          const mainImage = asset.images.find((img) => img.order === 1);
          return (
            <div key={idx} className="favorito-page-card">
              <div className="favorito-page-card-description">
                <h2>{asset.title}</h2>
                <p>
                  <strong>{asset.location.city}</strong>,{" "}
                  {asset.location.address}
                </p>
                <b>Compra: ${asset.operation.price.selling} </b>
                <b>Alquilar: ${asset.operation.price.rental}</b>
              </div>
              <img
                className="favorito-page-img"
                alt={`${asset.title}`}
                src={mainImage.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritosSection;
