import React from "react";

const PaymentFormSteps = () => {
  return (
    <div className="form-step">
      <h1>Complete your booking</h1>
      <div className="form-step-wrapper">
        <div className="col left-col">
          <ul>
            <li>
              <span>1</span>
              Your Email
            </li>
            <li>
              <span>2</span>
              Your Billing Address
            </li>
            <li>
              <span>3</span>
              Your Email
            </li>
            <li>
              <span>4</span>
              Your Email
            </li>
          </ul>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="">Enter your Email to get started</label>
            <input type="text" placeholder="Enter your Email here" />
            <button>Next</button>
          </div>
          <div className="form-group">
            <label htmlFor="">Enter your name</label>
            <div className="form-group-wrapper">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Company (optional)" />
              <input type="text" placeholder="Phone No." />
            </div>
            <label htmlFor="">Enter your address</label>
            <input type="text" placeholder="Address" />
            <div className="form-group-wrapper">
              <input type="text" placeholder="City" />
              <input type="text" placeholder="Postal Code" />
            </div>
            <button>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFormSteps;
