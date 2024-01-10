import { Link } from "react-router-dom";
import "./NewAssetPage.css";
import { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import FormInput from "../../../components/FormInput/FormInput";

const EmptyNewAsset = {
  type: "Selecciona un tipo de bien",
  area: {
    total: "",
    covered: "",
  },
  title: "",
  owner: "",
  operation: {
    type: "Selecciona",
    price: {
      selling: "",
      rental: "",
      charges: "",
    },
  },
  location: {
    address: "",
    zone: "",
    city: "",
  },
  details: {
    age: "",
    rooms: "",
    parking: "",
    bathrooms: "",
  },
  characteristics: {
    description: "",
    keyPoints: "",
  },
};

function NewAssetPage() {
  const [newAsset, setNewAsset] = useState(EmptyNewAsset);
  const {
    type,
    area: { total, covered },
    title,
    owner,
    operation: {
      type: operationType,
      price: { selling, rental, charges },
    },
    location: { address, zone, city },
    details: { age, rooms, parking, bathrooms },
    characteristics: { description, keyPoints },
  } = newAsset;

  console.log(newAsset);
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
    if (
      type === "Selecciona un tipo de bien" ||
      total === undefined ||
      covered === undefined ||
      title === undefined ||
      owner === undefined ||
      operationType === "Selecciona" ||
      address === undefined ||
      zone === undefined ||
      city === undefined ||
      age === undefined ||
      rooms === undefined ||
      parking === undefined ||
      bathrooms === undefined ||
      description === undefined ||
      keyPoints === undefined
    )
      return alert("Porfavor,completa los campos");
    if (selling === undefined && rental === undefined)
      return alert("Porfavor, ingresa un valor");

    if (storedToken) {
      try {
        alert(JSON.stringify(newAsset));
        const response = await fetch("http://localhost:8000/asset", {
          method: "POST",
          headers: {
            "Content-Type": "Application/json",
            authorization: `Bearer ${storedToken}`,
          },
          body: JSON.stringify(newAsset),
        });
        const data = await response.json();
        console.log(response);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Bienes</h2>
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
              name={"area.total"}
            />
            <FormInput
              onChange={onInputChange}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Area construida"}
              type={"number"}
              placeholder={"m2"}
              name={"area.covered"}
            />
          </div>
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
          <div>
            <label className="Form-Input-Section">
              Vender, Alquilar, Ambos?
            </label>
            <select
              onChange={onInputChange}
              value={operationType}
              name="operation.type"
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
              name={"operation.price.selling"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de venta"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"operation.price.rental"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              type={"number"}
              label={"Valor de alquiler"}
              placeholder={"$"}
            />
            <FormInput
              onChange={onInputChange}
              name={"operation.price.charges"}
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
              name={"location.city"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Ciudad"}
              placeholder={"Ciudad"}
            />
            <FormInput
              onChange={onInputChange}
              name={"location.zone"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Zona"}
              placeholder={"Zona del Bien"}
            />
          </div>
          <FormInput
            onChange={onInputChange}
            name={"location.address"}
            divClassName={"Form-Input-Section"}
            pattern={"text-input"}
            label={"Dirección"}
            placeholder={"Dirección del bien"}
          />
          <div className="assetform-area-container">
            <FormInput
              onChange={onInputChange}
              name={"details.age"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Antiguedad"}
              placeholder={"Cuantos años tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"details.rooms"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Cantidad de Cuartos"}
              placeholder={"Cuantos cuartos tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"details.parking"}
              divClassName={"Form-Input-Section"}
              pattern={"text-input"}
              label={"Parqueos disponibles"}
              placeholder={"Cuantos parqueos tiene?"}
              type={"number"}
            />
            <FormInput
              onChange={onInputChange}
              name={"details.bathrooms"}
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
              name="characteristics.description"
              className="NewAssetPage-textarea text-input"
              maxLength={1500}
            />
          </div>
          <div className="Form-Input-Section">
            <label>Key Points</label>
            <textarea
              onChange={onInputChange}
              name="characteristics.keyPoints"
              className="NewAssetPage-textarea text-input"
              maxLength={250}
            />
          </div>
        </div>
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
