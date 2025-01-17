import React from "react";
import "./Achievement.scss";
import AwardIcon from "../../../../../assets/images/award.png";

const Achievement = (props) => {
  const { title, description } = props;
  return (
    <div className="achievement">
      <img src={AwardIcon} alt="" className="icon-achievement" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Achievement;
