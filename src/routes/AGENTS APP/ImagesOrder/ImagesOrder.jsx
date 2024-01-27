/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./ImagesOrder.css";
import CustomButton from "../../../components/CustomButton/CustomButton";
import {
  serverGetSingleAsset,
  serverUpdateImagesOrder,
} from "../../../API/serverFuncions";
import { getTokenHSLS } from "../../../API/LocalStorage";

const ImageItem = ({ img, index, moveImage }) => {
  const [, ref] = useDrag({
    type: "IMAGE",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "IMAGE",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="image-order-container">
      <p style={{ margin: 0 }}>{index + 1}</p>
      <img
        className="image-to-order"
        alt={`${img.imageName}`}
        src={img.imageUrl}
      />
    </div>
  );
};

const ImagesOrder = () => {
  const { name, ucid } = useParams();
  const formattedName = name.replace(/_/g, " ");
  const [currentImages, setCurrentImages] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAsset = async () => {
      try {
        const response = await serverGetSingleAsset(formattedName, ucid);
        console.log("API Response:", response);

        if (response.ok) {
          const data = await response.json();
          const sortedImages = data.asset.images.sort(
            (a, b) => a.order - b.order
          );
          setCurrentImages(sortedImages);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getAsset();
  }, [formattedName, ucid]);

  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...currentImages];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setCurrentImages(updatedImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = getTokenHSLS();

    if (token) {
      try {
        const updatedImages = currentImages.map(
          ({ imageUrl, ...rest }, index) => ({
            ...rest,
            order: index + 1,
          })
        );

        await serverUpdateImagesOrder(token, ucid, updatedImages);
        alert("El order se ha guardado!");
        return navigate("/agenciaadmin");
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="agency-sub-page NewAssetPage">
      <h2 className="agency-sub-page-title">Orden de imágenes</h2>
      <DndProvider backend={HTML5Backend}>
        <form onSubmit={handleSubmit}>
          <div className="order-images-container">
            {currentImages.map((img, idx) => (
              <ImageItem
                key={idx}
                img={img}
                index={idx}
                moveImage={moveImage}
              />
            ))}
          </div>
          <CustomButton
            content={"Guardar Orden"}
            pattern={"blue"}
            type={"submit"}
          />
        </form>
      </DndProvider>
    </div>
  );
};

export default ImagesOrder;
