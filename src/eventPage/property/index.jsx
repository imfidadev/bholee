import React from "react";
import {
  eventCardImg,
  eventSlider10,
  eventSlider11,
  eventSlider12,
  eventSlider13,
  eventSlider14,
  eventSlider15,
  eventSlider16,
  eventSlider17,
  eventSlider18,
  eventSlider19,
  eventSlider2,
  eventSlider20,
  eventSlider21,
  eventSlider3,
  eventSlider4,
  eventSlider5,
  eventSlider6,
  eventSlider7,
  eventSlider8,
  eventSlider9,
} from "../../assets/images/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "./style.scss";
import "swiper/css";
import "swiper/css/effect-fade";

const EventProperty = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };
  return (
    <section className="event-property">
      <h2>our property</h2>
      <p>
        Located near the Currituck National Wildlife Refuge, just south of the
        Virginia border, our 4x4home gives you access to the wild side of the
        Outer Banks, where wild horses roam free. This is a one of a kind
        experiences where you are likely to see a wild mustang walking freely in
        the area. 
      </p>
      <div className="event-card">
        <div className="event-card-img">
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
              <img src={eventCardImg} alt="card-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider2} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider3} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider4} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider5} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider6} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider7} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider8} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider9} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider10} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider11} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider12} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider13} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider14} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider15} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider16} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider17} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider18} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider19} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider20} alt="about-img" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={eventSlider21} alt="about-img" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="event-card-info">
          <h3>
            The Mark Twain Grand Ocean Front Home at The Three Authors- Outer
            Banks, North Carolina
          </h3>
          <p>
            Located near the Currituck National Wildlife Refuge, just south of
            the Virginia border, our 4x4home gives you access to the wild side
            of the Outer Banks, where wild horses roam free. This is a one of a
            kind experiences where you are likely to see a wild mustang walking
            freely in the area. 
          </p>
          <div className="card-bottom">
            <button onClick={() => scrollToSection("retreatCard")}>
              Book Your Slot
            </button>
          </div>
        </div>
      </div>
      <div className="event-text">
        <h4>The Mark Twain – Grand Ocean Front Home</h4>
        <p>
          Immerse in the perfect blend of grandeur and classic Outer Banks charm
          at The Mark Twain, an 18-bedroom beachfront retreat home. Luxurious
          indoor and outdoor idyllic spaces. It is an extended escape to
          reconnect, celebrate, and create a symphony of unforgettable memories.
        </p>
        <p>
          This magnificent home has a heated outdoor pool, a relaxing hot tub,
          gazebo, luxury bedrooms, spacious elevated decks overlooking the
          ocean, Game room for a little entertainment between activities with
          pool table, foosball table and plenty of places to enjoy sunrises on
          the ocean, sunsets on the sound, and the wild horses of Corolla! There
          are several transportation options for you at this 4-wheel drive-only
          property.
        </p>
      </div>
    </section>
  );
};

export default EventProperty;
