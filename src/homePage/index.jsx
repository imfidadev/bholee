import React from "react";
import HomeHero from "./hero";
import HomeAbout from "./about";
import "./style.scss";
import HomeGallery from "./gallery";
import TextSection from "./text";
import InstagramPosts from "./instagramPosts";
import ContactForm from "./contactForm";
import ImgSlider from "./fullSlider/ImgSlider";

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <ImgSlider />
      <HomeGallery />
      <TextSection />
      <ContactForm />
      <InstagramPosts />
    </>
  );
};

export default HomePage;
