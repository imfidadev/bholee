import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  heroCircle,
  heroLogo,
  homeHero1,
  homeHero2,
  homeHero3,
  homeHero4,
  homeHeroMbl1,
  homeHeroMbl2,
  homeHeroMbl3,
  homeHeroMbl4,
} from "../../assets/images/images";
import { Autoplay, EffectFade } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";
const HomeHero = () => {
  return (
    <section className="home-hero">
      <div className="hero-slider">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          effect={"fade"}
          modules={[Autoplay, EffectFade]}
          speed={500}
          // autoplay={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <img className="web" src={homeHero1} alt="" />
            <img className="mbl" src={homeHeroMbl1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="web" src={homeHero4} alt="" />
            <img className="mbl" src={homeHeroMbl2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="web" src={homeHero3} alt="" />
            <img className="mbl" src={homeHeroMbl3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="web" src={homeHero2} alt="" />
            <img className="mbl" src={homeHeroMbl4} alt="" />
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
          {/* <span>More about Bholee</span>
          <img src={heroArrow} alt="hero-arrow" /> */}
        </div>
      </div>
      <div className="hero-logo">
        <img src={heroLogo} alt="hero-logo" />
      </div>
    </section>
  );
};

export default HomeHero;
