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
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowPopup(true);
      localStorage.setItem("hasVisited", "true");
    }
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [showPopup]);

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
