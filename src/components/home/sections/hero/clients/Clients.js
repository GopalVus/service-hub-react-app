import React from "react";
import Client from "./client/Client";
import Apple from "../../../../../assets/images/apple.png";
import Google from "../../../../../assets/images/google.png";
import Netflix from "../../../../../assets/images/netflix.png";
import Facebook from "../../../../../assets/images/facebook.png";
import Youtube from "../../../../../assets/images/youtube.jpg";
import Spotify from "../../../../../assets/images/spotify.jpg";
import "./Clients.scss";

const Clients = () => {
  return (
    <div className="clients">
      <Client icon={Apple} />
      <Client icon={Google} />
      <Client icon={Netflix} />
      <Client icon={Facebook} />
      <Client icon={Youtube} />
      <Client icon={Spotify} />
    </div>
  );
};

export default Clients;
