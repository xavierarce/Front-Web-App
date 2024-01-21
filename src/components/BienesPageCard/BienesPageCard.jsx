import React, { useState } from "react";
import "./BienesPageCard.css";
import CustomButton from "../CustomButton/CustomButton";
import { Link } from "react-router-dom";
import DeleteAssetPopUp from "../DeleteAssetPopUp/DeleteAssetPopUp";
import { getTokenHSLS } from "../../API/LocalStorage";
import LoadingSpinner from "../LoadingSpiner/LoadingSpinner";
import { serverDeleteAsset } from "../../API/serverFuncions";

const BienesPageCard = ({ asset }) => {
  const [confirmPopUp, setConfirmPopUp] = useState(null);
  const { title, location, operation, images, owner, ucid } = asset;
  const [isLoading, setIsLoading] = useState(false);
  const { selling, rental, charges } = operation.price;
  const mainImage = images.find((image) => image.order === 1);

  const deleteAsset = async () => {
    setIsLoading(true);
    const token = getTokenHSLS();
    if (token) {
      try {
        const response = await serverDeleteAsset(title, ucid, token);
        if (response.ok) {
          const data = await response.json();
          console.log("delete", data);
          alert("Eliminado!");
          setIsLoading(false);
          window.location.reload();
        } else {
          // Handle non-ok response (e.g., show an error message)
          setIsLoading(false);
          console.error(`Failed to delete asset. Status: ${response.status}`);
        }
      } catch (error) {
        // Handle network or other errors
        setIsLoading(false);
        console.error("Error during delete request:", error);
      }
    }
  };

  return (
    <div className="agency-sub-page-card">
      <div className="agencysub-card-description ">
          <h2 className="text-0-margin">{title}</h2>
          <p className="text-0-margin">{location.address}</p>
          <p className="text-0-margin">Propietario: {owner}</p>
          <p className="text-0-margin">{operation.type}</p>
          <b className="text-0-margin">
            Venta: ${selling} - Alquiler: ${rental} - Alicuota: ${charges}
          </b>
        <div className="agencysub-boton-y-propietario">
          <Link to={`bien/${title.replace(/\s/g, "_")}/${ucid}`}>
            <CustomButton pattern={"blue"} content={"Editar"} />
          </Link>
          <Link
            target="_blank"
            to={`/bienes/${title.replace(/\s/g, "_")}/${ucid}`}
          >
            <CustomButton pattern={"white"} content={"Ver"} />
          </Link>
          <Link to={`bien/ordenimagenes/${title.replace(/\s/g, "_")}/${ucid}`}>
            <CustomButton
              pattern={"blue"}
              content={"Modificar Order de Imagenes"}
            />
          </Link>
          {/* <CustomButton
            pattern={"red-small"}
            content={"Desactivar"}
            onButtonClick={() => setConfirmPopUp({ option: "Desactivar" })}
          /> */}
          <CustomButton
            pattern={"red-small"}
            content={"Eliminar"}
            onButtonClick={() => setConfirmPopUp({ option: "Eliminar" })}
          />
          {confirmPopUp ? (
            <DeleteAssetPopUp
              option={confirmPopUp.option}
              asset={asset}
              close={() => setConfirmPopUp(null)}
              deleteAsset={() => deleteAsset()}
            />
          ) : null}
          {isLoading ? <LoadingSpinner /> : null}
        </div>
      </div>
      <img className="agencysub-image" alt={title} src={mainImage.imageUrl} />
    </div>
  );
};

export default BienesPageCard;
