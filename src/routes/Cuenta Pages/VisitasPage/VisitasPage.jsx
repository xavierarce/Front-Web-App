import {  Link } from "react-router-dom";
import "./VisitasPage.css";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useState, useEffect } from "react";
import { getTokenHSLS } from "../../../API/LocalStorage";
import { useContext } from "react";
import { AuthContext } from "../../../Context/Login.context";
import { serverGetUserVisits } from "../../../API/serverFuncions";

const VisitasPage = () => {
  const { currentUser } = useContext(AuthContext);
  const [scheduledVisits, setScheduledVisits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noVisits, setNoVisits] = useState(false);

  useEffect(() => {
    const getScheduledVisits = async () => {
      setIsLoading(true);
      const token = getTokenHSLS();

      if (token) {
        try {
          const response = await serverGetUserVisits(currentUser, token);
          const data = await response.json();

          if (data.assetsToSend && data.assetsToSend.length > 0) {
            setNoVisits(false);
            return setScheduledVisits(data.assetsToSend);
          }

          setNoVisits(true);
          setScheduledVisits([]);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    getScheduledVisits();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (noVisits === true) {
    return (
      <div className=" favoritos-section">
        <h2 className="favoritos-page-title">Tus Visitas</h2>
        <p>Aun no tienes visitas programadas</p>
      </div>
    );
  }

  return (
    <div className=" favoritos-section">
      <h2 className="favoritos-page-title">Tus Visitas</h2>
      <div className="favorito-page-favoritos-container">
        {isLoading ? (
          <div className="UserInterface-loading-spinner-container">
            <div className="loading-spinner" />
          </div>
        ) : (
          scheduledVisits.map((asset, idx) => {
            const { title, location, scheduledDate, imageUrl, ucid } = asset;
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
                    <CustomButton content={"Ver"} pattern={"blue"} />
                  </Link>
                </div>
                <img
                  className="favorito-page-img"
                  alt={`${title}`}
                  src={imageUrl}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default VisitasPage;
