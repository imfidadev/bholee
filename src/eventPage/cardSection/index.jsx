import React, { useState } from "react";
import { bgLogo } from "../../assets/images/images";
import RetreatCard from "../../components/retreatCard";
import "./style.scss";
import PaymentModal from "../../components/paymentModal/paymentModal";

const CardSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelected = (data) => {
    setSelected(data);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  return (
    <section className="card-section">
      <div className="gallery-text">
        <div className="bg-logo">
          <img src={bgLogo} alt="bg-logo" />
        </div>
        <p>
          Welcome to Bholee Yoga Retreats, where we invite you to embark on a
          transformative journey towards inner harmony, rejuvenation, and
          self-discovery. In the midst of our fast-paced lives, it's essential
          to carve out moments of serenity and mindfulness just for YOU.
        </p>
        <p>
          This year you are invited to2 mini retreats for an unforgettable
          luxury yoga getaway at our breathtaking Luxury Private Beachfront Mark
          Twain Estate at the OBX 4x4 Beaches, where wild horses roam freely.
        </p>

        <p>
          <b>Feel free to join one or both retreats.</b>
        </p>
      </div>

      <div className="cards">
        <RetreatCard handleSelected={handleSelected} />
      </div>

      <PaymentModal
        currency={"usd"}
        amount={100}
        isOpen={isModalOpen}
        onClose={closeModal}
        selected={selected}
      />
    </section>
  );
};

export default CardSection;
