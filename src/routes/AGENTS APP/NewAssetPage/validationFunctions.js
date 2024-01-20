// validation.js
const spanishFieldNames = {
  type: "Tipo de Bien",
  totalArea: "Área total",
  coveredArea: "Área construida",
  title: "Título",
  owner: "Propietario",
  operationType: "Vender, Alquilar, Ambos?",
  address: "Dirección",
  zone: "Zona",
  city: "Ciudad",
  age: "Antigüedad",
  rooms: "Número de habitaciones",
  parking: "Número de parqueos",
  bathrooms: "Número de baños",
  description: "Descripción",
  keyPoints: "Puntos clave",
};

const spanishErrorMessages = {
  "Please complete the following fields:":
    "Por favor completa los siguientes campos:",
  "Please add the selling value.": "Por favor añade valor de venta",
  "Please add the rental value.": "Por favor añade valor de alquiler",
  "Please add both selling and rental values.":
    "Por favor añade valor de venta y alquiler",
  "Invalid type selected.": "Tipo de bien seleccionado no válido.",
  "Invalid operation type selected.":
    "Vender, Alquilar, Ambos? seleccionado no válido.",
};

export const validateAsset = (asset) => {
  const requiredFields = [
    "type",
    "totalArea",
    "coveredArea",
    "title",
    "owner",
    "operationType",
    "address",
    "zone",
    "city",
    "age",
    "rooms",
    "parking",
    "bathrooms",
    "description",
    "keyPoints",
  ];

  if (asset.title && asset.title.includes("_")) {
    return "El título no puede contener guiones bajos (_).";
  }

  const missingFields = requiredFields.filter((field) => !asset[field]);

  if (missingFields.length > 0) {
    const missingFieldNames = missingFields.map(
      (field) => spanishFieldNames[field]
    );
    return `${
      spanishErrorMessages["Please complete the following fields:"]
    } ${missingFieldNames.join(", ")}`;
  }

  if (asset.type === "Selecciona un tipo de bien") {
    return spanishErrorMessages["Invalid type selected."];
  }

  if (asset.operationType === "Selecciona") {
    return spanishErrorMessages["Invalid operation type selected."];
  }

  if (asset.operationType === "Vender" && !asset.sellingValue) {
    return spanishErrorMessages["Please add the selling value."];
  }

  if (asset.operationType === "Alquilar" && !asset.rentalValue) {
    return spanishErrorMessages["Please add the rental value."];
  }

  if (
    asset.operationType === "Vender y Alquilar" &&
    (!asset.rentalValue || !asset.sellingValue)
  ) {
    return spanishErrorMessages["Please add both selling and rental values."];
  }

  return null; // No validation issues
};
