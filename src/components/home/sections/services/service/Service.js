import React from "react";
import "./Service.scss";
import DataAnalysis from "../../../../../assets/images/data-analysis.png";
import Button from "../../../../utils/button/Button";

export const Service = (props) => {
  const { image, text } = props;

  return (
    <div className="service">
      <img className="service-img" src={image} alt="" />
      <div className="info-box">
        <div className="info">{text}</div>

        <Button type="text" text="Read more" />
      </div>
    </div>
  );
};

export default Service;
