// ImageGallery.js

import React, { useState } from "react";
import "./ImageGallery.css"; // Import the CSS file
import CustomButton from "../CustomButton/CustomButton";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="image-gallery-container">
      <div className="image-and-arrows">
        <CustomButton content={"<"} color={"arrow"} onClick={previousImage} />
        <img
          className="main-image"
          src={images[currentImageIndex]}
          alt={images[currentImageIndex]}
        />
        <CustomButton content={">"} color={"arrow"} onClick={nextImage} />
      </div>

      <div className="thumbnail-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${
              index === currentImageIndex ? "thumbnail-active" : ""
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
