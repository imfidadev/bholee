import React from "react";
import { heroArrow, heroCircle, heroLogo } from "../../assets/images/images";
import "./style.scss";

const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h1>
          Hello, <br /> I am Mahrukh Nice to meet you
        </h1>
        <div className="anchor-link">
          <div className="hero-circle">
            <img src={heroCircle} alt="hero-circle" />
          </div>
          <span>More about Bholee</span>
          <img src={heroArrow} alt="hero-arrow" />
        </div>
      </div>
      <div className="hero-logo">
        <img src={heroLogo} alt="hero-logo" />
      </div>
    </section>
  );
};

export default HomeHero;
