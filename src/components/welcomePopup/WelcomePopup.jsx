import React from "react";
import "./style.scss";
import { close, welcomeImg1, welcomeImg2 } from "../../assets/images/images";
import { Link } from "react-router-dom";

const WelcomePopup = ({ onClose }) => {
  return (
    <dialog open className="welcome-popup">
      <img onClick={onClose} src={close} alt="colse" className="close-img" />
      <div className="main-div">
        <div className="left">
          <div className="upper">
            <div className="img">
              <img src={welcomeImg1} alt="img" />
            </div>
            <div className="info">
              {/* <h2>Retreat - 1</h2> */}
              <h2>A Journey Inward.</h2>
              <h4>Sept 22-25</h4>
            </div>
          </div>
          <div className="upper">
            <div className="img">
              <img src={welcomeImg2} alt="img" />
            </div>
            <div className="info">
              {/* <h2>Retreat - 2</h2> */}
              <h2>The Body Holiday</h2>
              <h4>Sept 25-28</h4>
            </div>
          </div>
        </div>

        <div className="right">
          <h3>Avail Early Bird Discount</h3>
          <h2>Bholee Yoga and Wellness Retreats</h2>
          <h5>Till 31st July</h5>
          <h4>Escape, Reset, Return Home Renewed</h4>
          <p>
            Join us for an unforgettable, luxurious getaway to the beautiful
            oceanfront Mark Twain Residence at the OBX 4x4 Beaches with Wild
            Horses roaming around.
          </p>
          <Link to="/events/#retreatCard" onClick={onClose}>
            Explore
          </Link>
        </div>
      </div>
    </dialog>
  );
};

export default WelcomePopup;
