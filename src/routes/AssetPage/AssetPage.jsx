import { useParams } from "react-router-dom";
import {ASSETSFAKEDATA} from "../../AssetsFakeData";
import ImageGallery from "../../components/ImageGalley/ImageGallery";
import "./AssetPage.css";
import VisitForm from "../../components/VisitForm/VisitForm";
import QuestionPopUp from "../../components/QuestionPopUp/QuestionPopUp";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import CustomButton from "../../components/CustomButton/CustomButton";

const FakeImages = ASSETSFAKEDATA.map((asset, idx) => {
  return asset.imageURL;
});

function AssetPage() {
  const [openQuestion, setOpenQuestion] = useState(false);

  const { id } = useParams();

  const asset = ASSETSFAKEDATA.find((item) => item.id === parseInt(id, 10));
  const { title, description } = asset;

  const onAskQuestion = () => {
    setOpenQuestion(true);
  };
  const onCloseQuestion = () => setOpenQuestion(false);

  return (
    <div className="asset-page">
      <div className="asset-page-top-container">
        <h2 className="asset-page-top-title">
          {asset ? asset.title : "Asset not found"}
        </h2>
          <div className="asset-page-top-favorito">
            <CustomButton content={"Marcar"} pattern={"blue-small"} />
            <AiFillStar size="1.5em" />
          </div>
          <CustomButton content={"Compartir🔗"} pattern={"blue-small"} />
      </div>
      <ImageGallery images={FakeImages} />
      <div className="asset-page-description-section">
        <div className="asset-page-descripcion-container">
          <div>
            <h2 className="asset-page-title">{title}</h2>
          </div>
          <p className="asset-page-description">{description} </p>
        </div>
        <VisitForm onButtonClick={onAskQuestion} />
      </div>
      {openQuestion && <QuestionPopUp closeQuestion={onCloseQuestion} />}
    </div>
  );
}

export default AssetPage;
