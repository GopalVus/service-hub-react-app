import React from "react";
import "./TextareaInput.scss";

const TextareaInput = (props) => {
  const { label, placeholder, style } = props;
  return (
    <>
      <label for="textarea-input">{label}</label>
      <br></br>
      <textarea
        placeholder={placeholder}
        style={style}
        className="textarea-input"
      />
    </>
  );
};

export default TextareaInput;
