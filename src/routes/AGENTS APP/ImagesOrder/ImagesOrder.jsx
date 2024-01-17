import React, { useEffect, useState } from "react";
import { destructureAssetToModify } from "../EditAssetPage.jsx/destructureFunctions";
import { useNavigate, useParams } from "react-router-dom";
import "./ImagesOrder.css";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { getTokenHSLS } from "../../../API/LocalStorage";

function ImagesOrder() {
  const { name, ucid } = useParams(); //Get ID
  const formattedName = name.replace(/-/g, " ");
  const [missingNumbers, setMissingNumbers] = useState([]);
  const [currentImages, setCurrentImages] = useState();

  const navigate = useNavigate();

  console.log("state es", currentImages);

  useEffect(() => {
    const getAsset = async () => {
      try {
        const response = await fetch(
          `http://localhost:8000/assets/singleAsset?name=${formattedName}&ucid=${ucid}`
        );
        const data = await response.json();
        if (response.ok) {
          const sortedImages = destructureAssetToModify(data.asset).images.sort(
            (a, b) => a.order - b.order
          );
          setCurrentImages(sortedImages);
        }
      } catch (error) {}
    };
    getAsset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateMissingNumbers = () => {
    if (!currentImages) {
      return <h2>Cargando...</h2>;
    }
    const orders = currentImages.map((img) => img.order);
    const minOrder = Math.min(...orders);
    const maxOrder = Math.max(...orders);

    const allNumbers = Array.from(
      { length: maxOrder - minOrder + 1 },
      (_, i) => i + minOrder
    );
    const missingNumbers = allNumbers.filter((num) => !orders.includes(num));

    setMissingNumbers(missingNumbers);
  };

  useEffect(() => {
    // Update missing numbers whenever currentImages changes
    updateMissingNumbers();
  }, [currentImages]);

  if (!currentImages) {
    return <h2>Cargando...</h2>;
  }

  // return false if not unique
  const areOrdersUnique = () => {
    const uniqueOrders = new Set(currentImages.map((img) => img.order));
    if (uniqueOrders.size !== currentImages.length) {
      return alert("El orden debe ser unico");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    areOrdersUnique();
    const token = getTokenHSLS();

    if (token) {
      try {
        const updatedImages = currentImages.map(
          ({ imageUrl, ...rest }) => rest
        );

        const response = await fetch(
          "http://localhost:8000/assets/updateAssetImageOrder",
          {
            method: "POST",
            headers: {
              authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ucid, updatedImages }),
          }
        );
        const data = await response.json();
        console.log(response);
        console.log(data);
        alert("El order se ha guardado!");
        return navigate('/agenciaadmin');
      } catch (error) {}
    }
  };

  const onOrderChange = (e, imgIndex) => {
    const { value } = e.target;
    // Ensure the new order is within the valid range
    const newOrder = Math.min(
      Math.max(parseInt(value, 10), 1),
      currentImages.length
    );

    setCurrentImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages[imgIndex] = { ...updatedImages[imgIndex], order: newOrder };
      return updatedImages;
    });
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Orden de imagenes</h2>
      <p>
        Porfavor, coloca en el numero en el orden que deseas que aparezcan las
        imagenes. (Eg: 1,2,3,4)
      </p>
      <h2>{formattedName}</h2>
      {missingNumbers.length > 0 && (
        <div className="missing-numbers-container">
          <p>Falta el numero: {missingNumbers.join(", ")}</p>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="order-images-container">
          {currentImages.map((img, idx) => {
            const isOrderRepeated = currentImages.some(
              (otherImg, otherIdx) =>
                idx !== otherIdx && img.order === otherImg.order
            );
            const inputClass = isOrderRepeated
              ? "text-input repeated"
              : "text-input";

            return (
              <div key={idx} className="image-order-container">
                <div>
                  <label>Orden</label>
                  <input
                    required
                    onChange={(e) => onOrderChange(e, idx)}
                    value={img.order}
                    name={img.imageName}
                    type="number"
                    className={inputClass}
                    min={1}
                    max={currentImages.length}
                  />
                </div>
                <img
                  className="image-to-order"
                  alt={`${formattedName}/${idx}`}
                  src={img.imageUrl}
                />
              </div>
            );
          })}
        </div>
        <CustomButton
          content={"Guardar Orden"}
          pattern={"blue"}
          type={"submit"}
        />
      </form>
    </div>
  );
}

export default ImagesOrder;
