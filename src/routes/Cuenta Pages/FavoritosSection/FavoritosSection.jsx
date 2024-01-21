import "./FavoritosSection.css";
import { useEffect, useState } from "react";
import { getTokenHSLS } from "../../../API/LocalStorage";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { serverGetUserFavorites } from "../../../API/serverFuncions";

const FavoritosSection = () => {
  const [favoriteAssets, setFavoriteAssets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noFavorites, setNoFavorites] = useState(false);

  console.log(noFavorites);

  useEffect(() => {
    const getFavorites = async () => {
      setIsLoading(true);
      const token = getTokenHSLS("hogar-seguro");

      if (!token) {
        // Handle case when token is not available
        setIsLoading(false);
        setNoFavorites(true);
        return setFavoriteAssets([]);
      }

      try {
        const response = await serverGetUserFavorites(token);
        const data = await response.json();

        if (data.userFavoriteAssets && data.userFavoriteAssets.length > 0) {
          setIsLoading(false);
          setNoFavorites(false);
          return setFavoriteAssets(data.userFavoriteAssets);
        }

        setIsLoading(false);
        setNoFavorites(true);
        return setFavoriteAssets([]);
      } catch (error) {
        setIsLoading(false);
        setNoFavorites(true);
        console.error(error);
      }
    };

    getFavorites();
  }, []);

  if (noFavorites === true) {
    return (
      <div className=" favoritos-section">
        <h2 className="favoritos-page-title">Tus Favoritos</h2>
        <p>Aun no tienes favoritos marcados</p>
      </div>
    );
  }

  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Favoritos</h2>
      <div className="favorito-page-favoritos-container">
        {isLoading ? (
          <div className="UserInterface-loading-spinner-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          favoriteAssets.map((asset, idx) => {
            const { title, ucid } = asset;
            console.log(title, ucid, "dasd");
            const mainImage = asset.images.find((img) => img.order === 1);
            return (
              <div key={idx} className="favorito-page-card">
                <div className="favorito-page-card-description">
                  <h2 className="favorite-card-text">{asset.title}</h2>
                  <p className="favorite-card-text">
                    <strong>{asset.location.city}</strong>,{" "}
                    {asset.location.address}
                  </p>
                  <div>
                    <b>Compra: ${asset.operation.price.selling} </b>
                    <b>Alquilar: ${asset.operation.price.rental}</b>
                  </div>
                  <Link to={`/bienes/${title.replace(/\s/g, "_")}/${ucid}`}>
                    <CustomButton pattern={"blue"} content={"Ver"} />
                  </Link>
                </div>
                <img
                  className="favorito-page-img"
                  alt={`${asset.title}`}
                  src={mainImage.imageUrl}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FavoritosSection;
