import React, { useEffect, useState } from "react";
import HomeHero from "./hero";
import HomeAbout from "./about";
import "./style.scss";
import HomeGallery from "./gallery";
import TextSection from "./text";
import InstagramPosts from "./instagramPosts";
import ContactForm from "./contactForm";
import ImgSlider from "./fullSlider/ImgSlider";
import WelcomePopup from "../components/welcomePopup/WelcomePopup";

const HomePage = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      {showPopup && <WelcomePopup onClose={handleClosePopup} />}
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
