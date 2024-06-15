import React, { useState } from "react";
import Checkout from "../payment/stripeCheckout";

const PaymentFormSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  return (
    <div className="form-step">
      <h1>Complete your booking</h1>
      <div className="form-step-wrapper">
        <div className="col left-col">
          <ul>
            <li className={currentStep === 1 ? "active" : ""}>
              <span>1</span>
              Your Email
            </li>
            <li className={currentStep === 2 ? "active" : ""}>
              <span>2</span>
              Your Billing Address
            </li>
            <li className={currentStep === 3 ? "active" : ""}>
              <span>3</span>
              Payment Method
            </li>
            <li className={currentStep === 4 ? "active" : ""}>
              <span>4</span>
              Almost Done
            </li>
          </ul>
        </div>
        <div className="col">
          {currentStep === 1 && (
            <div className="form-group">
              <label htmlFor="email">Enter your Email to get started</label>
              <input type="email" placeholder="Enter your Email here" />
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {currentStep === 2 && (
            <div className="form-group">
              <label htmlFor="name">Enter your name</label>
              <div className="form-group-wrapper">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Company (optional)" />
                <input type="text" placeholder="Phone No." />
              </div>
              <label className="marginTop" htmlFor="address">
                Enter your address
              </label>
              <input type="text" placeholder="Address" />
              <div className="form-group-wrapper">
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Postal Code" />
              </div>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
          {currentStep === 3 && <Checkout amount={100} />}
          {currentStep === 4 && (
            <div className="form-group">
              <label htmlFor="name">Choose your Payment Method</label>
              <div className="payment-card confirm-payment">
                <h3>SHARED OCCUPANCY</h3>
                <h4>$3600</h4>
                <h5>
                  Ocean View, King bed with friend/family, private bathroom
                </h5>
              </div>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentFormSteps;
