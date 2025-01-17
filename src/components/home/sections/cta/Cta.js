import React from "react";
import Button from "../../../utils/button/Button";
import "./Cta.scss";

const Cta = () => (
  <div className="cta">
    <div>Contact us to know more. We will be in touch shortly...</div>
    <div className="demo-btn">
      <Button type="primary" text="Request a demo" />
    </div>
  </div>
);

export default Cta;
