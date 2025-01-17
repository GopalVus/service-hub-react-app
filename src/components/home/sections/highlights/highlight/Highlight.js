import React from "react";
import './Highlight.scss';

const Highlight = (props) => {
  const {icon, title, description} = props;

  return (
    <div className="highlight">
     <div>
      <img src={icon} alt="" />
     </div>
     <div>
      <b>{title}</b>
      <p>{description}</p>
      <div></div>
     </div>
    </div>
  );
};

export default Highlight;
