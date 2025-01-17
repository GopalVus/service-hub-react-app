import React from "react";
import ProfileCard from "../../../utils/profile-card/ProfileCard";
import "./Team.scss";
import SectionTitle from "../../../utils/section-title/SectionTitle";
import Button from "../../../utils/button/Button";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-left">
        <div className="flex-row">
          <ProfileCard />
          <ProfileCard />
        </div>
        <div className="flex-row flex-row2">
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div className="team-right">
        <SectionTitle sectionTitle="Our team" />
        <p>
          Founded in 1990 by Gopal. Serving 200+ clients across the world. $300
          Bn revenue. Helping our clients achieve their goals. Using cutting
          edge technologies.
        </p>
        <Button type="text" text="Join us" />
      </div>
    </div>
  );
};

export default Team;
