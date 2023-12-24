import { useParams } from "react-router-dom";
import ASSETSFAKEDATA from "../../AssetsFakeData";
import ImageGallery from "../../components/ImageGalley/ImageGallery";
import "./AssetPage.css";
import CustomButton from "../../components/CustomButton/CustomButton";

const FakeImages = ASSETSFAKEDATA.map((asset, idx) => {
  return asset.imageURL;
});

console.log(FakeImages);

function AssetPage() {
  const { id } = useParams();

  const asset = ASSETSFAKEDATA.find((item) => item.id === parseInt(id, 10));
  const { title, description } = asset;

  return (
    <div className="asset-page">
      <h2 className="asset-page-top-title">{asset ? asset.title : "Asset not found"}</h2>
      <ImageGallery images={FakeImages} />
      <div className="asset-page-description-section">
        <div className="asset-page-descripcion-container">
          <h2 className="asset-page-title">{title}</h2>
          <p className="asset-page-description">{description} </p>
        </div>
        {/* Visita */}
        <div className="asset-page-visits-questions">
          <div className="asset-page-questions-form">
            <div className="asset-page-questions-container">
              <div className="asset-page-question-container">
                <p className="asset-page-question">
                  Selecciona una fecha para la visita
                </p>
                <input />
              </div>
              <div className="asset-page-question-container">
                <p className="asset-page-question">
                  Cual seria tu fecha de entrada?
                </p>
                <input />
              </div>
            </div>
            <CustomButton content={"Solicitar Visita"} color={"blue"} />
          </div>
          <div className="asset-page-question-endingbox">
            <p className="asset-page-question">Tienes una pregunta?</p>
            <CustomButton color={"blue"} content={"Consultanos!"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssetPage;
