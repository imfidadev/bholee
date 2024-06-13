import React from "react";

const SelectPayment = () => {
  return (
    <div className="payment-step">
      <h2>Choose an option</h2>
      <p>
        You can start exercising any day. Your subscription starts from the
        moment of payment.
      </p>
      <div className="payment-card-wrapper">
        <div className="payment-card">
          <h3>SHARED OCCUPANCY</h3>
          <h4>$1600</h4>
          <h5>Single but would like to share room</h5>
          <button>join the lesson</button>
        </div>
        <div className="payment-card">
          <h3>SHARED OCCUPANCY</h3>
          <h4>$2000</h4>
          <h5>Queen bed with private bathroom</h5>
          <button>join the lesson</button>
        </div>
        <div className="payment-card">
          <h3>SHARED OCCUPANCY</h3>
          <h4>$2800</h4>
          <h5>King bed with friend/family, private bathroom</h5>
          <button>join the lesson</button>
        </div>
        <div className="payment-card">
          <h3>SHARED OCCUPANCY</h3>
          <h4>$3600</h4>
          <h5>Ocean View, King bed with friend/family, private bathroom</h5>
          <button>join the lesson</button>
        </div>
      </div>
    </div>
  );
};

export default SelectPayment;
