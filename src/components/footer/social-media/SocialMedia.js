import React from "react";
import Apple from "../../../assets/images/apple.png";
import Netflix from "../../../assets/images/netflix.png";
import Google from "../../../assets/images/google.png";
import Facebook from "../../../assets/images/facebook.png";
import Twitter from "../../../assets/images/twitter.png";
import Youtube from "../../../assets/images/youtube.jpg";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="icon-container">
        <img src={Google} alt="" className="icon" />
      </div>
      <div className="icon-container">
        <img src={Facebook} alt="" className="icon" />
      </div>
      <div className="icon-container">
        <img src={Twitter} alt="" className="icon" />
      </div>
      <div className="icon-container">
        <img src={Youtube} alt="" className="icon" />
      </div>
    </div>
  );
};

export default SocialMedia;
