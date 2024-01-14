import { useParams } from "react-router-dom";
import "./AssetPage.css";
import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import CustomButton from "../../../components/CustomButton/CustomButton";
import ImageGallery from "../../../components/ImageGalley/ImageGallery";
import VisitForm from "../../../components/VisitForm/VisitForm";
import QuestionPopUp from "../../../components/QuestionPopUp/QuestionPopUp";
import { getTokenHSLS } from "../../../API/LocalStorage";

function AssetPage() {
  const [openQuestion, setOpenQuestion] = useState(false);
  const [isAssetFavorite, setIsAssetFavorite] = useState(false);
  const [currentAsset, setCurrentAsset] = useState();

  console.log(currentAsset);
  const { id } = useParams();
  const formattedId = id.replace(/-/g, " ");

  console.log(id);
  console.log(formattedId);

  useEffect(() => {
    const getAsset = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/assets/singleAsset?name=${formattedId}`
        );
        const data = await response.json();
        if (response.ok) {
          setCurrentAsset(data.asset);
        }
      } catch (error) {}
    };
    getAsset();
  }, []);

  // Handle the case where the asset is not found
  if (!currentAsset) {
    return (
      <div className="asset-page">
        <h2 className="asset-page-top-title">Asset not found</h2>
      </div>
    );
  }

  const handleFavorite = async () => {
    const token = getTokenHSLS("hogar-seguro");
    if (token) {
      if (!isAssetFavorite) {
        try {
          const response = await fetch(
            "http://localhost:8000/favorite/setFavorite",
            {
              method: "POST",
              headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify({ assetTitle: currentAsset.title }),
            }
          );
          const data = await response.json();
          console.log(data);
          console.log(response);
          return setIsAssetFavorite(!isAssetFavorite);
        } catch (error) {
          console.error(error);
        }
        return alert("Inicia Sesion!");
      }
      return setIsAssetFavorite(!isAssetFavorite);
    }
  };

  const { title, address, characteristics, images } = currentAsset;

  console.log(characteristics.description);

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
          <p className="asset-page-title">{address}</p>
          <p className="asset-page-description">
            {characteristics.description}
          </p>
          <b className="asset-page-description">¡Puntos Importantes!</b>
          <p className="asset-page-description">{characteristics.keyPoints}</p>
        </div>
        <VisitForm onButtonClick={onAskQuestion} />
      </div>
      {openQuestion && <QuestionPopUp closeQuestion={onCloseQuestion} />}
    </div>
  );
}

export default AssetPage;
