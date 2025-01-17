import React from "react";
import "./TextInput.scss";

const TextInput = (props) => {
  const { label, placeholder, width, style } = props;

  return (
    <>
      <label for="text-input-label">{label}</label>
      <input
        id="text-input"
        className="text-input"
        placeholder={placeholder}
        style={style}
      ></input>
    </>
  );
};

export default TextInput;
