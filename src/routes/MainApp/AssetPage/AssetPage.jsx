/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import "./AssetPage.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import CustomButton from "../../../components/CustomButton/CustomButton";
import ImageGallery from "../../../components/ImageGalley/ImageGallery";
import VisitForm from "../../../components/VisitForm/VisitForm";
import QuestionPopUp from "../../../components/QuestionPopUp/QuestionPopUp";
import { getTokenHSLS } from "../../../API/LocalStorage";
import {
  serverAddFavorite,
  serverGetAssetIsFavorite,
  serverGetSingleAsset,
  serverRemoveFavorite,
} from "../../../API/serverFuncions";

function AssetPage() {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [isAssetFavorite, setIsAssetFavorite] = useState(false);
  const [currentAsset, setCurrentAsset] = useState();

  const { name, ucid } = useParams();
  const formattedName = name.replace(/_/g, " ");
  const assetInfo = { title: formattedName, ucid };

  useEffect(() => {
    const getAsset = async () => {
      try {
        const response = await serverGetSingleAsset(formattedName, ucid);
        const data = await response.json();
        if (response.ok) {
          setCurrentAsset(data.asset);
        }
      } catch (error) {}
    };
    getAsset();
  }, []);

  useEffect(() => {
    const getIsAssetFavorite = async () => {
      const token = getTokenHSLS("hogar-seguro");
      if (token) {
        try {
          const response = await serverGetAssetIsFavorite(
            formattedName,
            ucid,
            token
          );
          const data = await response.json();
          if (data.isFavorite) {
            return setIsAssetFavorite(true);
          } else {
            return setIsAssetFavorite(false);
          }
        } catch (error) {
          console.error(error);
        }
      }
    };
    getIsAssetFavorite();
  }, []);

  // Handle the case where the asset is not found
  if (!currentAsset) {
    return (
      <div className="asset-page">
        <div className="loading-spinner"></div>
        <h2 className="asset-page-top-title">
          Vuelve a buscar si toma mucho tiempo...
        </h2>
      </div>
    );
  }

  const handleFavorite = async () => {
    const token = getTokenHSLS("hogar-seguro");
    if (token) {
      if (!isAssetFavorite) {
        try {
          const response = await serverAddFavorite(
            formattedName,
            ucid,
            token,
            currentAsset
          );
          if (response.ok) {
            return setIsAssetFavorite(true);
          }
        } catch (error) {
          console.error(error);
        }
      }

      if (isAssetFavorite) {
        try {
          await serverRemoveFavorite(formattedName, ucid, token, currentAsset);
          return setIsAssetFavorite(false);
        } catch (error) {
          console.error(error);
        }
      }
    }
    return alert("Inicia Sesion!");
  };

  const { title, operation, location, area, details, characteristics, images } =
    currentAsset;

  const onAskQuestion = () => {
    setOpenQuestion(true);
  };

  const onCloseQuestion = () => setOpenQuestion(false);

  return (
    <div className="asset-page">
      <ImageGallery images={images} />
      <div className="asset-page-description-section">
        <div className="asset-page-descripcion-container">
          <div className="asset-page-top-container">
            <h2 className="asset-page-title">{title}</h2>
            <div className="asset-page-top-favorito">
              <CustomButton
                onButtonClick={handleFavorite}
                content={!isAssetFavorite ? "Marcar Favorito" : "Desmarcar"}
                pattern={"blue-small"}
              />
              <AiFillStar
                size="1.5em"
                color={!isAssetFavorite ? "black" : "yellow"}
              />
            </div>
          </div>
          <p className="asset-page-address">
            {location.address}, {location.zone}, {location.city}
          </p>

          <p className="asset-page-address">
            {operation.price.selling && operation.price.selling > 0
              ? `   Venta $${operation.price.selling}`
              : null}
            {operation.price.rental && operation.price.rental > 0
              ? `   Alquiler $${operation.price.rental}`
              : null}
            {operation.price.charges && operation.price.charges > 0
              ? `   Alicuota $${operation.price.charges}`
              : null}
          </p>

          <div className="asset-page-details-container">
            <b className="asset-page-detail-item">
              Area Construida: {area.covered}m2
            </b>
            <b className="asset-page-detail-item">Area Total: {area.total}m2</b>
            <b className="asset-page-detail-item">Baños: {details.bathrooms}</b>
            <b className="asset-page-detail-item">Cuartos: {details.rooms}</b>
            <b className="asset-page-detail-item">
              Antiguedad: {details.age} {details.age > 1 ? "años" : "año"}
            </b>
          </div>
          <p className="asset-page-description">
            {characteristics.description}
          </p>
          <h2 className="asset-page-title">¡Puntos Importantes!</h2>
          <p className="asset-page-description">{characteristics.keyPoints}</p>
        </div>
        <VisitForm onButtonClick={onAskQuestion} assetInfo={assetInfo} />
      </div>
      {openQuestion && <QuestionPopUp closeQuestion={onCloseQuestion} />}
    </div>
  );
}

export default AssetPage;
