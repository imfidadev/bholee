import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { aboutImg, aboutImg2, aboutImg3 } from "../../assets/images/images";
import { Autoplay, EffectFade } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const HomeAbout = () => {
  return (
    <section className="home-about" id="about">
      <div className="text-content">
        <h3>
          WHo is <br /> Mahrukh?
        </h3>
        <div className="img-content">
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            effect={"fade"}
            modules={[Autoplay, EffectFade]}
            speed={1000}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // autoplay={false}
          >
            <SwiperSlide>
              <img src={aboutImg} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={aboutImg2} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={aboutImg3} alt="about-img" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="text-content">
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
    </section>
  );
};

export default HomeAbout;
