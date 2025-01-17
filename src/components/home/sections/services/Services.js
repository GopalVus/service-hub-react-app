import React from "react";
import "./Services.scss";
import Service from "./service/Service";
import DataAnalysis from "../../../../assets/images/data-analysis.png";
import Mobile from "../../../../assets/images/mobile2.png";
import Website from "../../../../assets/images/website.png";
import AI from "../../../../assets/images/ai.png";
import Marketing from "../../../../assets/images/marketing.png";
import Iot from "../../../../assets/images/iot.png";

export const Services = () => {
  return (
    <div className="services">
      <div className="title-row">
        <div>
          <h3>Our Services</h3>
        </div>
        <div>
          <p>
            GoDivzz Tech’s 3,50,000 experts help businesses accelerate digital
            transformation and build a bright future with cutting edge
            technologies.
          </p>
        </div>
      </div>
      <div className="services-row">
        <Service
          image={DataAnalysis}
          text="Data analysis using latest technologies like Python, React, Java and other technologies."
        />
        <Service
          image={Mobile}
          text="Mobile application development using React Native, Flutter, ios and android"
        />
        <Service
          image={Website}
          text="Web application development using latest technologies like ReactJS, Css, Html, and other tech"
        />
      </div>

      <div className="services-row">
        <Service
          image={AI}
          text="AI models creation using latest technologies like Python and other technologies."
        />
        <Service
          image={Marketing}
          text="Marketing strategies for launching new products or services using latest technologies"
        />
        <Service
          image={Iot}
          text="iot application development and using the latest technologies."
        />
      </div>
    </div>
  );
};

export default Services;
