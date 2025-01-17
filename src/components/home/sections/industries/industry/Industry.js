import React from "react";
import "./Industry.scss";

const Industry = (props) => {
  const { image } = props;

  return (
    <div class="industry-container">
      <img src={image} alt="Avatar" className="image" />
      <div class="text-cotainer">
        <h4>
          <b>John Doe</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};

export default Industry;
