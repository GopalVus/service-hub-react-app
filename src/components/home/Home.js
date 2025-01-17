import React from "react";
import { Hero } from "./sections/hero/Hero";
import Achievements from "./sections/achievements/Achievements";
import Highlights from "./sections/highlights/Highlights";
import Services from "./sections/services/Services";
import Cta from "./sections/cta/Cta";
import Testimonials from "./sections/testimonials/Testimonials";
import Industries from "./sections/industries//Industries";
import Footer from "../footer/Footer";

const Home = () => (
  <div>
    <Hero />
    <Achievements />
    <Highlights />
    <Services />
    <Cta />
    <Testimonials />
    <Industries />
    <Footer />
  </div>
);

export default Home;
