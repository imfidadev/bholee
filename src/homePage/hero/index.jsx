import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import {
  heroArrow,
  heroCircle,
  heroImg,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
  heroImg6,
  heroLogo,
  homeHero2,
  homeHero3,
  homeHero4,
} from "../../assets/images/images";
import "./style.scss";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img src={heroImg} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={homeHero4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={homeHero3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={homeHero2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero-content">
        <h1 className="main-hero-title">
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
