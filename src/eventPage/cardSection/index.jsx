import React, { useEffect, useState } from "react";
import { bgLogo } from "../../assets/images/images";
import RetreatCard from "../../components/retreatCard";
import "./style.scss";
import { useLocation } from "react-router-dom";
import PaymentModal from "../../components/paymentModal/paymentModal";

const CardSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleSelected = (data) => {
    setSelected(data);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <>
      <section className="card-section">
        <div className="gallery-text">
          {/* <div className="bg-logo">
            <img src={bgLogo} alt="bg-logo" />
          </div> */}
          <p>
            <b>Welcome to Bholee Yoga Retreats!</b>
          </p>
          <p>
            We at Bholee understand that mental, physical and spiritual health
            are the most important aspects of human growth and being. In our
            fast-paced world, it's essential to find moments of serenity and
            mindfulness just for YOU.
          </p>
          <p>
            Our retreats are an opportunity for you to delve into the sanctuary
            of your mind, body and soul amidst the tranquil nature to discover
            YOUR path to inner harmony, cultivate personal growth and
            self-connection.
          </p>
          <p>
            Each retreat is a getaway for you, whether you are seeking
            relaxation or growth, Bholee Yoga and Wellness Retreats guide you on
            a journey that extends far beyond the duration of the retreat to
            help you return to your life with vitality and resilience.
          </p>
          <p>
            There’s no need to sacrifice luxury to embark on a spiritual
            journey. This year you are invited to Two Mini Retreats for an
            unforgettable yoga vacation at our breathtaking Luxury Private
            Beachfront Mark Twain Estate at the OBX 4x4 Beaches, where wild
            horses roam free
          </p>
          <p>
            From the lulling sound of the waves to the soothing blue of the
            ocean to healing salt, the beach does more than just provide a
            pretty backdrop; it also makes you feel better from the inside out.
          </p>
          <p>
            <b>Feel free to join one or both retreats.</b>
          </p>
        </div>

        {/* <div className="event-anchor-links">
          <a href="#retreatCard">Retreats</a>
          <a href="#facilitators">Facilitators</a>
          <a href="#location">Location</a>
        </div> */}

        <div className="cards">
          <RetreatCard handleSelected={handleSelected} />
        </div>

        <PaymentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selected={selected}
        />
      </section>

      <section className="card-section">
        <div className="gallery-text marginTop">
          <div className="bg-logo">
            <img src={bgLogo} alt="bg-logo" />
          </div>
          <p>
            Whether you come for three nights or six, we promise you this will
            be a time held in complete safety, trust and guidance as we dive
            into the depths of our soul, uncovering hidden talents, pains and
            excitement. We are here to celebrate the raw beauty within, to
            nurture, to heal, to feel, to bless and stand for the Self. You’ll
            be held and supported by your hosts, fellow retreaters, celebrated
            and lifted to a higher vibration.
          </p>

          <p>
            <b>
              This retreat is intended for you to do as much or as little as
              your heart and body desires.
            </b>
          </p>
        </div>
        {/* <p className="dark-color">
          Join us on this transformative odyssey as we journey inward, finding
          harmony within the sanctuary of our own souls.
        </p> */}
      </section>
    </>
  );
};

export default CardSection;
