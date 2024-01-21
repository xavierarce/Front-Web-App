import { useLocation, Link } from "react-router-dom";
import "./VisitasPage.css";
import { ASSETSFAKEDATACOMPLETE } from "../../../AssetsFakeData";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { getTokenHSLS } from "../../../API/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Login.context";

const Favorites = ASSETSFAKEDATACOMPLETE.slice(5, 7);

const VisitasPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [scheduledVisits, setScheduledVisits] = useState([]);

  useEffect(() => {
    const getScheduledVisits = async () => {
      const token = getTokenHSLS();
      if (token) {
        try {
          const response = await fetch(
            `http://localhost:8000/visit/uservisits?email=${currentUser.email}`,
            { headers: { authorization: `Bearer ${token}` } }
          );
          const data = await response.json();
          setScheduledVisits(data.assetsToSend);
        } catch (error) {}
      }
    };

    getScheduledVisits();
  }, []);

  const location = useLocation();
  console.log(location.pathname);

  console.log("voistis", scheduledVisits);
  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Visitas</h2>
      <div className="favorito-page-favoritos-container">
        {scheduledVisits.map((asset, idx) => {
          const { title, location, scheduledDate, imageUrl,ucid } = asset;
          console.log("date", asset);
          const formattedDate = new Date(scheduledDate).toLocaleDateString(
            "es-ES",
            {
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          return (
            <div key={idx} className="favorito-page-card">
              <div className="favorito-page-card-description">
                <h2>{title}</h2>
                <b>
                  Dirección: {location.address}, {location.city}
                </b>
                <b>Fecha: {formattedDate}</b>
                {/* <CustomButton
                    content={"Solicitar modificacion"}
                    pattern={"blue-small"}
                  /> */}
                <Link to={`/bienes/${title.replace(/ /g, "_")}/${ucid}`}>
                  <CustomButton
                    content={"Ver"}
                    pattern={"blue"}
                  />
                </Link>
              </div>
              <img
                className="favorito-page-img"
                alt={`${title}`}
                src={imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VisitasPage;
