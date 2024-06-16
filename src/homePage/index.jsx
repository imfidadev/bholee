import React from "react";
import HomeHero from "./hero";
import HomeAbout from "./about";
import { handImg } from "../assets/images/images";
import "./style.scss";
import HomeGallery from "./gallery";
import TextSection from "./text";
import InstagramPosts from "./instagramPosts";
import ContactForm from "./contactForm";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <section className="hand-img">
        <img src={handImg} alt="hand-img" />
      </section>
      <HomeGallery />
      <TextSection />
      <ContactForm />
      <InstagramPosts />
    </>
  );
};

export default HomePage;
