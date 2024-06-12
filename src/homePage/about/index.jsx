import React from "react";
import "./style.scss";
import { aboutImg } from "../../assets/images/images";

const HomeAbout = () => {
  return (
    <section className="home-about">
      <div className="text-content">
        <h3>
          WHo is <br /> Mahrukh Ahmed?
        </h3>
        <p>
          Mahrukh Ahmad, E-RYT-500 yoga teacher, was born in Lahore, Pakistan.
        </p>
        <p>
          After receiving her Bachelor’s Degree in Psychology with a focus on
          Positive Psychology, she moved to Dubai for five years, became a
          mother to a girl and a boy, and eventually settled in Northern
          Virginia in 2016.
        </p>
        <p>
          Positive Psychology sparked her interest in yoga, which soon became
          her passion. Following this passion, Mahrukh evolved into a
          compassionate and dedicated yoga teacher who leads with heart and
          guides her students on a soulful journey of self-discovery and growth.
        </p>
      </div>
      <div className="img-content">
        <img src={aboutImg} alt="about-img" />
      </div>
    </section>
  );
};

export default HomeAbout;
