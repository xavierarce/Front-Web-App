import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import FormInput from "../../../components/FormInput/FormInput";
import { ASSETSFAKEDATACOMPLETE } from "../../../AssetsFakeData";
import "./EditAssetPage.css";

const EditAssetPage = () => {
  const { id } = useParams(); //Get ID

  const assetToEdit = ASSETSFAKEDATACOMPLETE.find(
    (item) => item.id === parseInt(id, 10)
  );

  const nbDescriptionsInitial = assetToEdit.apartamento.descriptions.length;
  const [nbBoxes, setNbBoxes] = useState(nbDescriptionsInitial);
  const [newAsset, setNewAsset] = useState(assetToEdit);
  const handleMoreBox = () => {
    setNbBoxes(nbBoxes + 1);
    setNewAsset((prevAsset) => ({
      ...prevAsset,
      apartamento: {
        ...prevAsset.apartamento,
        descriptions: [
          ...prevAsset.apartamento.descriptions,
          { [`description${nbBoxes + 1}`]: "" },
        ],
      },
    }));
  };

  const handleLessBox = () => {
    if (nbBoxes > 1) {
      setNbBoxes(nbBoxes - 1);
      setNewAsset((prevAsset) => {
        const updatedDescriptions = [...prevAsset.apartamento.descriptions];
        updatedDescriptions.pop(); // Remove the last description
        return {
          ...prevAsset,
          apartamento: {
            ...prevAsset.apartamento,
            descriptions: updatedDescriptions,
          },
        };
      });
    }
  };

  const onInputChange = (e, idx) => {
    const { name, value } = e.target;
    setNewAsset((prevAsset) => {
      const updatedDescriptions = [...prevAsset.apartamento.descriptions];
      updatedDescriptions[idx] = { ...updatedDescriptions[idx], [name]: value };
      return {
        ...prevAsset,
        apartamento: {
          ...prevAsset.apartamento,
          descriptions: updatedDescriptions,
        },
      };
    });
  };

  const onSaveNewAsset = (e) => {
    e.preventDefault();
    alert(JSON.stringify(newAsset));
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Modificar Bien</h2>
      <div className="cerrar-button-asset">
        <Link to={"/agenciaadmin"}>
          <CustomButton content={"Cancelar"} pattern={"blue"} />
        </Link>
      </div>
      <form className="NewAssetPage-info-container">
        <div className="NewAssetPage-info-titular">
          {["title", "owner", "value", "city", "address"].map((inputName) => (
            <FormInput
              key={inputName}
              onChange={(e) => onInputChange(e)}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={inputName.charAt(0).toUpperCase() + inputName.slice(1)}
              placeholder={`Ingrese ${inputName}`}
              name={inputName}
              value={newAsset[inputName]}
            />
          ))}
        </div>
        <div className="NewAssetPage-info-titular">
          {[...Array(nbBoxes)].map((_, idx) => (
            <div className="NewAssetPage-textarea-container" key={idx}>
              <label>Descripción {idx + 1}</label>
              <textarea
                onChange={(e) => onInputChange(e, idx)}
                name={`description${idx + 1}`}
                className="NewAssetPage-textarea"
                maxLength={500}
                value={
                  (newAsset.apartamento.descriptions[idx] &&
                    newAsset.apartamento.descriptions[idx][
                      `description${idx + 1}`
                    ]) ||
                  ""
                }
              />
              {nbBoxes > 1 ? (
                <CustomButton
                  onButtonClick={handleLessBox}
                  type={"button"}
                  content={"Eliminar"}
                  pattern={"red-small"}
                />
              ) : null}
            </div>
          ))}
          <CustomButton
            type={"button"}
            onButtonClick={handleMoreBox}
            content={"Añadir Descripcion"}
            pattern={"blue-small"}
          />
        </div>
        <CustomButton
          onButtonClick={onSaveNewAsset}
          content={"Guardar Modificacion"}
          pattern={"blue"}
        />
      </form>
    </div>
  );
};

export default EditAssetPage;
