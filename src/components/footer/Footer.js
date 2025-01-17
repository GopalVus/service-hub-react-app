import React from "react";
import Button from "../../components/utils/button/Button";
import "./Footer.scss";
import Clients from "../home/sections/hero/clients/Clients";
import SocialMedia from "./social-media/SocialMedia";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="company-title-container">
        <h2>GoDivzz Tech</h2>
        <p className="copyright">Copyright @ 2023. GoDivzz Tech.</p>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Terms & Conditions</li>
          <li>Contact us</li>
          <li>Help</li>
        </ul>
      </div>
      <div>
        <h3>Follow us</h3>
        <SocialMedia />
      </div>
      <div>
        <h3>For updates</h3>
        <div className="email-row">
          <input placeholder="Email" />
          <Button type="primary" text="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
