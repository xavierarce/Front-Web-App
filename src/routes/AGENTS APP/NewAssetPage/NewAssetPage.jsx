import { Link, useNavigate } from "react-router-dom";
import "./NewAssetPage.css";
import { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import FormInput from "../../../components/FormInput/FormInput";
import { IoCloseCircle } from "react-icons/io5";
import LoadingSpinner from "../../../components/LoadingSpiner/LoadingSpinner";
import { validateAsset } from "./validationFunctions";
import { serverRegisterNewAsset } from "../../../API/serverFuncions";

const EmptyNewAsset = {
  type: "Selecciona un tipo de bien",
  totalArea: "",
  coveredArea: "",
  title: "",
  owner: "",
  operationType: "Selecciona",
  sellingValue: "0",
  rentalValue: "0",
  chargesValue: "0",
  address: "",
  zone: "",
  city: "",
  age: "",
  rooms: "",
  parking: "",
  bathrooms: "",
  description: "",
  keyPoints: "",
};

function NewAssetPage() {
  const [files, setFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const [newAsset, setNewAsset] = useState(EmptyNewAsset);
  const {
    type,
    totalArea,
    coveredArea,
    title,
    owner,
    operationType,
    sellingValue,
    rentalValue,
    chargesValue,
    address,
    zone,
    city,
    age,
    rooms,
    parking,
    bathrooms,
    description,
    keyPoints,
  } = newAsset;

  const onInputChange = (e) => {
    const { name, value } = e.target;

    // Separar el nombre del campo para acceder a la propiedad anidada
    const [mainField, nestedField, threedNestedField] = name.split(".");

    // Comprueba si es una propiedad anidada y actualiza el estado en consecuencia
    if (threedNestedField) {
      setNewAsset({
        ...newAsset,
        [mainField]: {
          ...newAsset[mainField],
          [nestedField]: {
            ...newAsset[mainField][nestedField],
            [threedNestedField]: value,
          },
        },
      });
    } else if (nestedField && !threedNestedField) {
      setNewAsset({
        ...newAsset,
        [mainField]: {
          ...newAsset[mainField],
          [nestedField]: value,
        },
      });
    } else {
      setNewAsset({ ...newAsset, [name]: value });
    }
  };

  const onSaveNewAsset = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("hogar-seguro");

    setIsLoading(true);
    //Ckeck for completness
    const validationError = validateAsset(newAsset);

    if (validationError) {
      setIsLoading(false);
      return alert(validationError);
    }

    if (files.length < 2) {
      setIsLoading(false);
      return alert("Minimo 2 imagenes");
    }

    if (storedToken) {
      try {
        const formData = new FormData();
        for (const key in newAsset) {
          formData.append(key, newAsset[key]);
        }

        files.forEach((file) => {
          formData.append("images", file);
        });

        await serverRegisterNewAsset(storedToken, formData);
        setIsLoading(false);
        alert("Guardado!");
        navigate("/agenciaAdmin");
      } catch (error) {
        console.error(error);
      }
    }
  };

  const filesSelected = (event) => {
    const selectedFiles = Array.from(event.target.files);

    // Update the state by adding the newly selected files to the existing files
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    // Create image previews for the selected files
    const previews = [];
    selectedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        setImagePreviews([...imagePreviews, ...previews]);
      };
      reader.readAsDataURL(file);
    });
  };

  const onDeleteImage = (index) => {
    const updatedFiles = [...files];
    const updatedImagePreviews = [...imagePreviews];

    // Remove the selected image and its preview
    updatedFiles.splice(index, 1);
    updatedImagePreviews.splice(index, 1);

    // Update the state with the modified arrays
    setFiles(updatedFiles);
    setImagePreviews(updatedImagePreviews);
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Agragar nuevo bien</h2>
      <div className="cerrar-button-asset">
        <Link to={"/agenciaadmin"}>
          <CustomButton content={"Regresar"} pattern={"blue"} />
        </Link>
      </div>
      <form onSubmit={onSaveNewAsset} className="NewAssetPage-info-container">
        <div className="NewAssetPage-info-titular">
          <div>
            <label className="Form-Input-Section">Tipo de bien</label>
            <select
              onChange={onInputChange}
              className="text-input"
              name="type"
              value={type}
            >
              <option>Selecciona un tipo de bien</option>
              <option>Apartamento</option>
              <option>Casa</option>
              <option>Edificio</option>
              <option>Terreno</option>
            </select>
          </div>
          <div className="assetform-area-container">
            <FormInput
              onChange={onInputChange}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Area del terreno"}
              type={"number"}
              placeholder={"m2"}
              name={"totalArea"}
              value={totalArea}
            />
            <FormInput
              onChange={onInputChange}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Area construida"}
              type={"number"}
              placeholder={"m2"}
              name={"coveredArea"}
              value={coveredArea}
            />
          </div>
          <FormInput
            onChange={onInputChange}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Titulo"}
            placeholder={"Nombra el Bien"}
            name={"title"}
            value={title}
          />
          <FormInput
            onChange={onInputChange}
            name={"owner"}
            value={owner}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Propietario"}
            placeholder={"Nombre del Propietario"}
          />
          <div>
            <label className="Form-Input-Section">
              Vender, Alquilar, Ambos?
            </label>
            <select
              onChange={onInputChange}
              value={operationType}
              name="operationType"
              className="text-input"
            >
              <option>Selecciona</option>
              <option>Vender</option>
              <option>Alquilar</option>
              <option>Vender y Alquilar</option>
            </select>
          </div>
          <div className="assetform-area-container">
            <FormInput
              onChange={onInputChange}
              name={"sellingValue"}
              value={sellingValue}
              minValue={0}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de venta"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"rentalValue"}
              value={rentalValue}
              minValue={0}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de alquiler"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"chargesValue"}
              value={chargesValue}
              minValue={0}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Valor de alicuota"}
              type={"number"}
              placeholder={"$"}
            />
          </div>
          <div className="assetform-area-container">
            <FormInput
              onChange={onInputChange}
              name={"city"}
              value={city}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Ciudad"}
              placeholder={"Ciudad"}
            />
            <FormInput
              onChange={onInputChange}
              name={"zone"}
              value={zone}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Zona"}
              placeholder={"Zona del Bien"}
            />
          </div>
          <FormInput
            onChange={onInputChange}
            name={"address"}
            value={address}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Dirección"}
            placeholder={"Dirección del bien"}
          />
          <div className="assetform-area-container">
            <FormInput
              onChange={onInputChange}
              name={"age"}
              value={age}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Antiguedad"}
              placeholder={"Cuantos años tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"rooms"}
              value={rooms}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Cantidad de Cuartos"}
              placeholder={"Cuantos cuartos tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"parking"}
              value={parking}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Parqueos disponibles"}
              placeholder={"Cuantos parqueos tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"bathrooms"}
              value={bathrooms}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Baños disponibles"}
              placeholder={"Cuantos baños tiene?"}
              type={"number"}
            />
          </div>
          <div className="Form-Input-Section">
            <label>Descripción</label>
            <textarea
              onChange={onInputChange}
              name="description"
              value={description}
              className="NewAssetPage-textarea text-input"
              maxLength={1500}
            />
          </div>
          <div className="Form-Input-Section">
            <label>Puntos Clave</label>
            <textarea
              onChange={onInputChange}
              name="keyPoints"
              value={keyPoints}
              className="NewAssetPage-textarea text-input"
              maxLength={1000}
            />
          </div>
          <div className="Form-Input-Section">
            <label>Fotos</label>
            <input
              onChange={filesSelected}
              type="file"
              accept="image/*"
              className="text-input"
              multiple
            />
          </div>
          <h3>{imagePreviews.length} Imagenes Seleccionadas : </h3>
          {imagePreviews.length > 0 && (
            <div className="edit-images-container">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="image-to-edit-container">
                  <IoCloseCircle
                    onClick={() => onDeleteImage(index)}
                    className="image-to-edit-close"
                    size="1rem"
                    color="red"
                  />
                  <img
                    key={index}
                    className="image-previews-images"
                    src={preview}
                    alt={`Preview ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {isLoading ? <LoadingSpinner /> : null}
        <CustomButton
          content={"Guardar Nuevo Bien"}
          pattern={"blue"}
          type={"submit"}
        />
      </form>
    </div>
  );
}

export default NewAssetPage;
