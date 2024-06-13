import React from "react";
import { stepper_img } from "../../assets/images/images";

const DetailsStep = () => {
  return (
    <div className="step-one-wrapper">
      <div className="col">
        <img className="stepper-img" src={stepper_img} alt="" />
      </div>
      <div className="col">
        <h2>Luxury Private Beachfront Retreat at OBX</h2>
        <h3>Escape, Reset, Return Home Renewed</h3>
        <p>
          A perfect break from an endless cycle of hustle and burnout. Bring
          your focus back to YOU, reset your body, recharge your mind, nourish
          your soul and reconnect with nature.
        </p>
        <p>
          Join us for an unforgettable, luxurious 5 nights 4 days getaway to the
          beautiful oceanfront Mark Twain Residence at the OBX 4x4 Beaches with
          Wild Horses roaming around.
        </p>
        <span>3 nights/ 2 days</span>
        <span>Start Date: September 16, 2023</span>
        <span>End Date: September 19, 2023</span>
        <button>Book your slot</button>
      </div>
    </div>
  );
};

export default DetailsStep;
