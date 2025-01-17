import React from "react";
import "./ColorCard.scss";

const ColorCard = (props) => {
  const { image, bgColor } = props;

  return (
    <div className="color-card-container" style={{ backgroundColor: bgColor }}>
      <div className="white-circle">
        <img src={image} alt="" />
      </div>
      <div className="card-title">Focused</div>
    </div>
  );
};

export default ColorCard;
