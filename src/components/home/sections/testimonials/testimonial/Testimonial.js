import React from "react";
import "./Testimonial.scss";
import John from "../../../../../assets/images/john.jpg";

const Testimonial = (props) => {
  return (
    <div className="testimonial">
      <b>Loved your service</b>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id pariatur
        consequuntur, libero tenetur placeat architecto magnam eveniet
        blanditiis quis quisquam praesentium exercitationem laboriosam.
        Accusantium voluptas dicta vero sequi, eligendi tenetur.
      </p>
      <div className="profile-pic-row">
        <div className="profile-pic">
          <img src={John} alt="" className="profile-pic" />
        </div>
        <div>
          <h4>John Jane</h4>
          <span>Director at x</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
