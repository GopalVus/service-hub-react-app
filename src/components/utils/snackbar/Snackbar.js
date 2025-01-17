import React from "react";
import "./Snackbar.scss";

const Snackbar = (props) => {
  const { content } = props;

  return <div className="snackbar">{content}</div>;
};

export default Snackbar;
