// ImageGallery.js

import React, { useState, useEffect } from "react";
import "./ImageGallery.css"; // Import the CSS file
import CustomButton from "../CustomButton/CustomButton";

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [sortedImages, setSortedImages] = useState([]);

  useEffect(() => {
    // Sort images based on the order property
    const sortedImages = [...images].sort((a, b) => a.order - b.order);
    setSortedImages(sortedImages);
  }, [images]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sortedImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + sortedImages.length) % sortedImages.length
    );
  };

  if (sortedImages.length === 0) {
    return <h2>Loading</h2>; // or return a loading state or placeholder
  }

  return (
    <div className="image-gallery-container">
      <div className="image-and-arrows">
        <CustomButton
          content={"<"}
          pattern={"arrow"}
          onButtonClick={previousImage}
        />
        <img
          className="main-image"
          src={sortedImages[currentImageIndex].imageUrl}
          alt={sortedImages[currentImageIndex].imageUrl}
        />
        <CustomButton
          content={">"}
          pattern={"arrow"}
          onButtonClick={nextImage}
        />
      </div>

      <div className="thumbnail-container">
        {sortedImages.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
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
