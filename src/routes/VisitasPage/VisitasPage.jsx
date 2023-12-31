import { useLocation } from "react-router-dom";
import { ASSETSFAKEDATACOMPLETE } from "../../AssetsFakeData";
import CustomButton from "../../components/CustomButton/CustomButton";
import "./VisitasPage.css";

const Favorites = ASSETSFAKEDATACOMPLETE.slice(5, 7);

function VisitasPage() {
  const location =useLocation()
  console.log(location.pathname);
  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Visitas</h2>
      <div className="favorito-page-favoritos-container">
        {Favorites.map((asset, idx) => {
          console.log(Favorites);
          return (
            <div key={idx} className="favorito-page-card">
              <div className="favorito-page-card-description">
                <h2>{asset.title}</h2>
                <p>{asset.address}</p>
                <b>Fecha de Visita: 3 de Enero</b>
                <b>Hora de Visita: 10:50</b>
                <CustomButton content={'Solicitar modificacion'} pattern={'blue-small'}/>
              </div>
              <img
                className="favorito-page-img"
                alt={`${asset.title}`}
                src={asset.imageURL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VisitasPage;
