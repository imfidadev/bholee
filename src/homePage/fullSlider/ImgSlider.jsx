import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  imgSlider1,
  imgSlider2,
  imgSlider3,
  imgSlider4,
} from "../../assets/images/images";

const ImgSlider = () => {
  return (
    <section className="img-slider">
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
          <img className="web" src={imgSlider1} alt="" />
          {/* <img className="mbl" src={homeHeroMbl1} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className="web" src={imgSlider2} alt="" />
          {/* <img className="mbl" src={homeHeroMbl2} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className="web" src={imgSlider3} alt="" />
          {/* <img className="mbl" src={homeHeroMbl3} alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <img className="web" src={imgSlider4} alt="" />
          {/* <img className="mbl" src={homeHeroMbl4} alt="" /> */}
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ImgSlider;
