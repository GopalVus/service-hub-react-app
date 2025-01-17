import React from "react";
import "./Client.scss";

const Client = (props) => {
  const { icon } = props;

  return (
    <div className="client">
      <img src={icon} alt="" className="client-image" />
    </div>
  );
};

export default Client;
