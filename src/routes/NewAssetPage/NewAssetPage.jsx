import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton/CustomButton";
import FormInput from "../../components/FormInput/FormInput";
import "./NewAssetPage.css";
import { useState } from "react";

function NewAssetPage() {
  const [nbBoxes, setNbBoxes] = useState(1);
  const [newAsset, setNewAsset] = useState({});
  const handleMoreBox = () => setNbBoxes(nbBoxes + 1);
  const handleLessBox = () => {
    if (nbBoxes >= 1) setNbBoxes(1);
    setNbBoxes(nbBoxes - 1);
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setNewAsset({ ...newAsset, [name]: value });
  };

  const onSaveNewAsset = (e) => {
    e.preventDefault();
    alert(JSON.stringify(newAsset));
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Bienes</h2>
      <div className="cerrar-button-asset">
        <Link to={"/agenciaadmin"}>
          <CustomButton content={"Regresar"} pattern={"blue"} />
        </Link>
      </div>
      <form className="NewAssetPage-info-container">
        <div className="NewAssetPage-info-titular">
          <FormInput
            onChange={onInputChange}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Titulo"}
            placeholder={"Nombra el Bien"}
            name={"title"}
          />
          <FormInput
            onChange={onInputChange}
            name={"owner"}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Propietario"}
            placeholder={"Nombre del Propietario"}
          />
          <FormInput
            onChange={onInputChange}
            name={"value"}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Valor"}
            placeholder={"Valor"}
          />
          <FormInput
            onChange={onInputChange}
            name={"city"}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Ciudad"}
            placeholder={"Ciudad"}
          />
          <FormInput
            onChange={onInputChange}
            name={"address"}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Dirección"}
            placeholder={"Dirección del Bien"}
          />
        </div>
        <div className="NewAssetPage-info-titular">
          {[...Array(nbBoxes)].map((_, idx) => {
            return (
              <>
                <label>Descripción {idx + 1}</label>
                <textarea
                  onChange={onInputChange}
                  name={`description${idx + 1}`}
                  className="NewAssetPage-textarea"
                  maxLength={500}
                />
                {nbBoxes > 1 ? (
                  <CustomButton
                    onButtonClick={handleLessBox}
                    type={"button"}
                    content={"Eliminar"}
                    pattern={"red-small"}
                  />
                ) : null}
              </>
            );
          })}
          <CustomButton
            type={"button"}
            onButtonClick={handleMoreBox}
            content={"Añadir Descripcion"}
            pattern={"blue-small"}
          />
        </div>
        <CustomButton
          onButtonClick={onSaveNewAsset}
          content={"Guardar Nuevo Bien"}
          pattern={"blue"}
        />
      </form>
    </div>
  );
}

export default NewAssetPage;
