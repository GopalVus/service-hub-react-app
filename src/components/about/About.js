import React from "react";
import ColorCard from "./color-card/ColorCard";
import IconTarget from "../../assets/images/icon-target.png";
import "./About.scss";
import Hero from "./sections/hero/Hero";
import Team from "./sections/team/Team";
import Cta from "./sections/cta/Cta";
import Footer from "../footer/Footer";

const index = () => {
  return (
    <div className="about-container">
      <Hero />
      <Team />
      <Cta />
      <Footer />
    </div>
  );
};

export default index;
