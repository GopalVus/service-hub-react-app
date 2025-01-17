import React from "react";
import John from "../../../assets/images/john.jpg";
import "./ProfileCard.scss";

const ProfileCard = () => {
  return (
    <div className="profile-card-container">
      <img src={John} alt="" />
      <h4>John sena</h4>
      <span>Full stack developer</span>
    </div>
  );
};

export default ProfileCard;
