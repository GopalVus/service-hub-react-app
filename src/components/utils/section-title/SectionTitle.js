import React from "react";
import "./SectionTitle.scss";

const SectionTitle = (props) => {
  const { sectionTitle } = props;

  return (
    <div className="section-title-container">
      <h3>{sectionTitle}</h3>
    </div>
  );
};

export default SectionTitle;
