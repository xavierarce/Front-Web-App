import React from "react";
import "./CustomButton.css";

const CustomButton = ({ content, pattern }) => {
  return (
    <button className={`custom-button-${pattern}`}>
      <h2 className={`custom-button-text-${pattern}`}> {content}</h2>
    </button>
  );
};

export default CustomButton;
