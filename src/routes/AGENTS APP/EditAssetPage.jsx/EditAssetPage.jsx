import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomButton from "../../../components/CustomButton/CustomButton";
import FormInput from "../../../components/FormInput/FormInput";
import { IoCloseCircle } from "react-icons/io5";
import "./EditAssetPage.css";
import { getTokenHSLS } from "../../../API/LocalStorage";
import { destructureAssetToModify } from "./destructureFunctions";

const EditAssetPage = () => {
  const { name, ucid } = useParams(); //Get ID
  const formattedName = name.replace(/-/g, " ");
  const [files, setFiles] = useState([]);

  const [imagePreviews, setImagePreviews] = useState([]);

  const navigate = useNavigate();

  const [currentAsset, setCurrentAsset] = useState();

  useEffect(() => {
    const getAsset = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/assets/singleAsset?name=${formattedName}&ucid=${ucid}`
        );
        const data = await response.json();
        if (response.ok) {
          setCurrentAsset(destructureAssetToModify(data.asset));
        }
      } catch (error) {}
    };
    getAsset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!currentAsset) {
    return <h2> Cargando</h2>;
  }

  console.log(currentAsset);
  const {
    type,
    totalArea,
    coveredArea,
    title,
    owner,
    operationType,
    selling,
    rental,
    charges,
    address,
    zone,
    city,
    age,
    rooms,
    parking,
    bathrooms,
    description,
    keyPoints,
    images,
  } = currentAsset;

  console.log(images);

  const onInputChange = (e) => {
    const { name, value } = e.target;

    // If you have nested properties, you need to handle them separately
    setCurrentAsset((prevFormData) => {
      if (name.includes(".")) {
        const [nestedProperty, nestedKey] = name.split(".");
        return {
          ...prevFormData,
          [nestedProperty]: {
            ...prevFormData[nestedProperty],
            [nestedKey]: value,
          },
        };
      }

      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const onUpdateAsset = async (e) => {
    e.preventDefault();

    const token = getTokenHSLS();
    if (token) {
      const formData = new FormData();
      for (const key in currentAsset) {
        if (Array.isArray(currentAsset[key])) {
          // If the property is an array, append each element individually
          currentAsset[key].forEach((element, index) => {
            formData.append(`images`, element.imageName);
          });
        } else {
          // If it's not an array, append it as is
          formData.append(key, currentAsset[key]);
        }
      }
      files.forEach((file) => {
        formData.append("images", file);
      });

      try {
        const response = await fetch(
          "http://localhost:8000/assets/updateAsset",
          {
            method: "POST",
            headers: {
              authorization: `Bearer ${token}`,
            },
            body: formData,
          }
        );
        console.log("ES ESTOOO", [...formData.entries()]);

        const data = await response.json();
        console.log("respnse", response);
        if (response.ok) {
          alert("Bien Guardado!");
          navigate(`/bienes/${title.replace(/\s/g, "-")}/${ucid}`);
        }
        console.log(data);
      } catch (error) {}
    }
  };

  console.log(files);
  console.log(imagePreviews);
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

  const onDeleteImage = (img, idx) => {
    const isConfirmed = window.confirm(`Seguro deseas borrar la imagen?`);

    if (isConfirmed) {
      const newImages = currentAsset.images.filter(
        (obj) => obj.imageName !== img.imageName
      );
      setCurrentAsset({ ...currentAsset, images: newImages });
    }
  };

  const onDeleteImageNew = (index) => {
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
      <h2 className="agency-sub-page-title">Modificar Bien</h2>
      <div className="cerrar-button-asset">
        <Link to={"/agenciaadmin"}>
          <CustomButton content={"Cancelar"} pattern={"blue"} />
        </Link>
      </div>
      <form onSubmit={onUpdateAsset} className="NewAssetPage-info-container">
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
              name={"selling"}
              value={selling}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de venta"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"rental"}
              value={rental}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de alquiler"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"charges"}
              value={charges}
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
            <label>Key Points</label>
            <textarea
              onChange={onInputChange}
              name="keyPoints"
              value={keyPoints}
              className="NewAssetPage-textarea text-input"
              maxLength={250}
            />
          </div>
          <label>Fotos existentes (mínimo 2 img.)</label>
          <div className="edit-images-container">
            {images.map((img, idx) => {
              return (
                <div key={idx} className="image-to-edit-container">
                  {
                    images.length>2?
                  <IoCloseCircle
                    onClick={() => onDeleteImage(img)}
                    className="image-to-edit-close"
                    size="1rem"
                    color="red"
                  />: null
                  }
                  <img
                    className="image-to-edit"
                    alt={`${title}/${idx}`}
                    src={img.imageUrl}
                  />
                </div>
              );
            })}
          </div>
          <div className="Form-Input-Section">
            <label>Añadir nuevas fotos</label>
            <input
              onChange={filesSelected}
              type="file"
              accept="image/*"
              className="text-input"
              multiple
            />
            <h3>{imagePreviews.length} Imagenes Nuevas Seleccionadas : </h3>
          </div>
          {imagePreviews.length > 0 && (
            <div className="edit-images-container">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="image-to-edit-container">
                  <IoCloseCircle
                    onClick={() => onDeleteImageNew(index)}
                    className="image-to-edit-close"
                    size="1rem"
                    color="red"
                  />
                  {/* <p</p> */}
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
        <CustomButton
          content={"Guardar Nuevo Bien"}
          pattern={"blue"}
          type={"submit"}
        />
      </form>
    </div>
  );
};

export default EditAssetPage;
