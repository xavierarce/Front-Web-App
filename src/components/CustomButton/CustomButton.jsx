import React from "react";
import "./CustomButton.css";

const CustomButton = ({ type,content, pattern, onButtonClick }) => {
  return (
    <button type={type} className={`custom-button-${pattern}`} onClick={onButtonClick}>
      <h2 className={`custom-button-text-${pattern}`}> {content}</h2>
    </button>
  );
};

export default CustomButton;
