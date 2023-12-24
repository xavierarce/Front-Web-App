import React from "react";
import "./CustomButton.css";

export const CustomButton = ({ content ,  color, onClick}) => {
  return (
    <button className={`custom-button-${color}`} onClick={onClick}>
      <h2 className={`custom-button-text-${color}`}> {content}</h2>
    </button>
  );
};

export default CustomButton;
