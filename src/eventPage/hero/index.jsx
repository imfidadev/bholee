import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import {
  heroImg,
  heroImg2,
  heroImg3,
  heroImg4,
  heroImg5,
  heroImg6,
  heroLogo,
} from "../../assets/images/images";
import "./style.scss";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const EventHero = () => {
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
            <img src={heroImg2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={heroImg6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="hero-content">
        <h1>
          Bholee Yoga
          <br />
          and Wellness Retreats
        </h1>
        <h3>A JOURNEY TO SELF-DISCOVERY</h3>
        <p>All Inclusive- Hosted by Bholee Yoga</p>
      </div>
      <div className="hero-logo">
        <img src={heroLogo} alt="hero-logo" />
      </div>
    </section>
  );
};

export default EventHero;
