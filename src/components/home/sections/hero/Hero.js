import React from "react";
import "./Hero.scss";
import HeroImg from "../../../../assets/images/heroImg.jpg";
import Button from "../../../utils/button/Button";
import Clients from "./clients/Clients";
import Desktop from "../../../../assets/images/desktop.jpg";

export const Hero = (props) => {
  return (
    <div className="hero">
      <div className="hero-content-left">
        <p>
          {" "}
          One of the best service providers in the world. 20 years in industry.
        </p>
        <p className="hero-desc">
          Using cutting edge technologies for delivering quality products
        </p>
        <div className="know-more-btn">
          <Button type="primary" text="Know more" />
        </div>
        <span>
          <b>500+ clients</b> trust us
        </span>
        <Clients />
      </div>
      <div>
        <img className="hero-img" src={HeroImg} alt="hero" />
      </div>
    </div>
  );
};
