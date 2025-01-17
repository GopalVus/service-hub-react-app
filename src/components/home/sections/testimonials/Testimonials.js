import React from "react";
import "./Testimonials.scss";
import Testimonial from "./testimonial/Testimonial";

const Testimonials = (props) => {
  return (
    <div className="testimonials">
      <h3>Our clients says</h3>
      <h5>GoDivzz is one of the best companies...</h5>
      <div className="testimonials-row">
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default Testimonials;
