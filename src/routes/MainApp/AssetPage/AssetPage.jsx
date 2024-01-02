import { useParams } from "react-router-dom";
import "./AssetPage.css";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { ASSETSFAKEDATA, ASSETSFAKEDATACOMPLETE } from "../../../AssetsFakeData";
import CustomButton from "../../../components/CustomButton/CustomButton";
import ImageGallery from "../../../components/ImageGalley/ImageGallery";
import AssetDescription from "../../../components/AssetDescription/AssetDesccription";
import VisitForm from "../../../components/VisitForm/VisitForm";
import QuestionPopUp from "../../../components/QuestionPopUp/QuestionPopUp";

const FakeImages = ASSETSFAKEDATA.map((asset, idx) => {
  return asset.imageURL;
});

function AssetPage() {
  const [openQuestion, setOpenQuestion] = useState(false);

  const { id } = useParams();

  const asset = ASSETSFAKEDATACOMPLETE.find(
    (item) => item.id === parseInt(id, 10)
  );

  // Handle the case where the asset is not found
  if (!asset) {
    return (
      <div className="asset-page">
        <h2 className="asset-page-top-title">Asset not found</h2>
      </div>
    );
  }

  const { title } = asset;

  const onAskQuestion = () => {
    setOpenQuestion(true);
  };

  const onCloseQuestion = () => setOpenQuestion(false);

  return (
    <div className="asset-page">
      <div className="asset-page-top-container">
        <h2 className="asset-page-top-title">{title}</h2>
        <div className="asset-page-top-favorito">
          <CustomButton content={"Marcar"} pattern={"blue-small"} />
          <AiFillStar size="1.5em" />
        </div>
        <div className="asset-page-share-button">
          <CustomButton content={"Compartir🔗"} pattern={"blue-small"} />
        </div>
      </div>
      <ImageGallery images={FakeImages} />
      <div className="asset-page-description-section">
        <AssetDescription asset={asset} />
        <VisitForm onButtonClick={onAskQuestion} />
      </div>
      {openQuestion && <QuestionPopUp closeQuestion={onCloseQuestion} />}
    </div>
  );
}

export default AssetPage;
