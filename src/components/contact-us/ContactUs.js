import React from "react";
import "./ContactUs.scss";
import TextInput from "../utils/input/text-input/TextInput";
import Map from "../../assets/images/map2.png";
import TextareaInput from "../utils/input/text-area-input/TextareaInput";
import Button from "../utils/button/Button";
import EmailIcon from "../../assets/images/icon-email.png";
import PhoneIcon from "../../assets/images/icon-phone.png";
import WebIcon from "../../assets/images/icon-web.png";
import AddressIcon from "../../assets/images/icon-address.png";
import SectionTitle from "../utils/section-title/SectionTitle";

const ContactUs = (props) => {
  return (
    <div className="contact-us-container">
      <div className="section-left">
        <SectionTitle sectionTitle="Contact us" />
        <div className="contact-form">
          <TextInput
            label="Full name"
            placeholder="Enter full name"
            style={{ width: "16rem" }}
          />
          <TextInput
            label="Email Id"
            placeholder="Enter Email Id"
            style={{ width: "16rem" }}
          />
          <TextareaInput
            label="Message"
            placeholder="Enter Message"
            style={{ width: "16rem", height: "6rem" }}
          />
          <Button type="primary" text="Submit" />
        </div>
      </div>
      <div className="section-right">
        <div>
          <img src={Map} alt="" />
        </div>
        <div>
          <b>Address:</b>
          <p>Hyderabad, India</p>
          <b>Email:</b>
          <p>contact@godivzz.com</p>
          <b>Phone:</b>
          <p>+91 90909 09090</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
