import React from "react";
import "./Button.scss";
import IconRightWhite from "../../../assets/images/icon-right-white.png";
import IconRightViolet from "../../../assets/images/icon-right-violet.png";

const Button = (props) => {
  const { type, text } = props;

  let iconSrc;
  switch (type) {
    case "primary":
      iconSrc = IconRightWhite;
      break;
    case "text":
      iconSrc = IconRightViolet;
      break;

    default:
      iconSrc = IconRightWhite;
      break;
  }
  return (
    <button className={type} onClick={() => props.onClick()}>
      {text}
      <img src={iconSrc} alt="icon Right" className="icon-right" />
    </button>
  );
};

export default Button;
