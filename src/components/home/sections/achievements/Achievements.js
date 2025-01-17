import React from "react";
import "./Achievements.scss";
import Achievement from "./achievement/Achievement";

const Achievements = () => {
  return (
    <div className="achievements">
      <h3>Achievements</h3>
      <h6>Achieved these awards and become a leader in the industry.</h6>
      <div className="achievements-box">
        <Achievement
          title="Best emerging company"
          description="list recognizes fast-growing, innovative startups on the path to becoming the next generation of public companies"
        />
        <Achievement
          title="Best IT Company of the decade"
          description="honors private, fast-growing companies of all sizes in America. This prestigious award celebrates entrepreneurial success"
        />
        <Achievement
          title="Best innovator of the year"
          description="list offers highly credited ratings that rank companies in technology, media, telecommunications, life sciences,"
        />
      </div>
    </div>
  );
};

export default Achievements;
