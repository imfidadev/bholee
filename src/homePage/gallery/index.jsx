import React from "react";
import { bgLogo, galleryImg } from "../../assets/images/images";
import "./style.scss";

const HomeGallery = () => {
  return (
    <>
      <section className="home-gallery">
        <div className="gallery-text">
          <div className="bg-logo">
            <img src={bgLogo} alt="bg-logo" />
          </div>
          <p>
            Mahrukh has experienced the life-changing benefits of yoga and is
            passionate about sharing this transformative practice with the
            world. Her love for yoga and commitment to teaching has inspired
            countless individuals on their journeys of self-discovery and
            growth.
          </p>
        </div>
        <div className="gallery-img">
          <img src={galleryImg} alt="gallery-img" />
        </div>
      </section>
    </>
  );
};

export default HomeGallery;
