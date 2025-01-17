import React from "react";
import "./ContactUs.scss";
import TextInput from "../utils/input/text-input/TextInput";
import Map from "../../assets/images/map.png";
import TextareaInput from "../utils/input/text-area-input/TextareaInput";
import Button from "../utils/button/Button";
import EmailIcon from "../../assets/images/icon-email.png";
import PhoneIcon from "../../assets/images/icon-phone.png";
import WebIcon from "../../assets/images/icon-web.png";
import AddressIcon from "../../assets/images/icon-address.png";

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <div className="flex-item">
        <img src={Map} alt="" className="map" />
        <div className="flex-row">
          <img src={AddressIcon} alt="" />{" "}
          <span>GoVid, Bangalore, India, 555000</span>
        </div>
        <div className="flex-row">
          <img src={PhoneIcon} alt="" /> <span>+1 929222 99223</span>
        </div>
        <div className="flex-row">
          <img src={EmailIcon} alt="" /> <span>contact@GoDivzz.com</span>
        </div>
        <div className="flex-row">
          <img src={WebIcon} alt="" />
          <span>wwww.govid.com</span>
        </div>
      </div>
      <div className="flex-item flex-item-right">
        <TextInput placeholder="Full Name" width={20} label="First Name" />
        <TextInput placeholder="Email" width={20} label="Emai Id" />
        <TextInput placeholder="Phone Number" width={20} label="Phone Number" />
        <TextareaInput
          placeholder="Enter message"
          width={20}
          label="Message"
          style={{ width: "20rem", height: "8rem", marginBottom: "1rem" }}
        />
        <Button type="primary" text="Submit" />
      </div>
    </div>
  );
};

export default ContactUs;
