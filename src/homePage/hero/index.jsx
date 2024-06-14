import React, { useState } from "react";
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
} from "../../assets/images/images";
import "./style.scss";
import "swiper/css";
import PaymentModal from "../../components/paymentModal/paymentModal";
import DetailsStep from "../../components/home/detailsStep";
import { Autoplay } from "swiper/modules";
import SelectPayment from "../../components/home/selectPaymentStep";
import PaymentFormSteps from "../../components/home/paymentFormsteps";

const HomeHero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
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
          Hello, <br /> I am Mahrukh Nice to meet you
        </h1>
        <div className="anchor-link">
          <div className="hero-circle">
            <img src={heroCircle} alt="hero-circle" />
          </div>
          <span onClick={openModal}>More about Bholee</span>
          <img src={heroArrow} alt="hero-arrow" />
        </div>
      </div>
      <div className="hero-logo">
        <img src={heroLogo} alt="hero-logo" />
      </div>
      <PaymentModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default HomeHero;
