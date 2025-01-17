import React from "react";
import Industry from "./industry/Industry";
import Grandi from "../../../../assets/images/grandi.jpg";
import Truck from "../../../../assets/images/truck.jpg";
import Space from "../../../../assets/images/space.jpg";
import Medical from "../../../../assets/images/medical.jpg";
import Biotech from "../../../../assets/images/biotech.jpg";
import Desktop from "../../../../assets/images/desktop.jpg";
import "./Industries.scss";

const Industries = () => {
  return (
    <div className="industries-container">
      <h3>Industries</h3>
      <h4>Automobile, Space, Biotech, Medical, Tourism...</h4>
      <div className="industries-row">
        <Industry image={Grandi} />
        <Industry image={Truck} />
        <Industry image={Space} />
      </div>
      <div className="industries-row">
        <Industry image={Medical} />
        <Industry image={Desktop} />
        <Industry image={Biotech} />
      </div>
    </div>
  );
};

export default Industries;
