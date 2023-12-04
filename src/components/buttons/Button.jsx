import React from "react";
import "./button.css";
const Button = ({ text, type, onBtnClick }) => {
  return (
    <button onClick={onBtnClick} className={type}>
      {text}
    </button>
  );
};

export default Button;
