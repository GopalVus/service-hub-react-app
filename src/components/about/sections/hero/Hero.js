import React from "react";
import SectionTitle from "../../../utils/section-title/SectionTitle";
import ColorCard from "../../color-card/ColorCard";
import IconTarget from "../../../../assets/images/icon-target.png";
import "./Hero.scss";
import Button from "../../../utils/button/Button";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="about-section-hero-left">
        <SectionTitle sectionTitle="About" />
        <p>
          Founded in 1990 by Gopal. Serving 200+ clients across the world. $300
          Bn revenue. Helping our clients achieve their goals. Using cutting
          edge technologies.
        </p>
        <Button type="text" text="Know more" />
      </div>
      <div className="section-right">
        <div className="flex-row">
          <ColorCard image={IconTarget} bgColor="#ffefef" />
          <ColorCard image={IconTarget} bgColor="#DCC2FF" />
        </div>

        <div className="flex-row flex-row-2">
          <ColorCard image={IconTarget} bgColor="#B6FFC6" />
          <ColorCard image={IconTarget} bgColor="#BEE5FF" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
