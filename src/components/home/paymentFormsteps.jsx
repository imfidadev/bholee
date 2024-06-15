import React, { useEffect, useState } from "react";
import Checkout from "../payment/stripeCheckout";
import { bookingMail, createPaymentIntent } from "../../api/actions";
import { toast } from "react-toastify";
import { parseError } from "../../utils";

const PaymentFormSteps = ({ currency, amount, isOpen }) => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [intent, setIntent] = useState(null);

  const [data, setData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const onChange = (label, value) => {
    setData({
      ...data,
      [label]: value,
    });
  };

  const resetFormDetails = () => {
    setData({
      ...data,
      email: "",
      firstName: "",
      lastName: "",
      companyName: "",
      phone: "",
      address: "",
      city: "",
      postalCode: "",
    });
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const onNext = (e) => {
    e.preventDefault();
    handleNext();
  };

  const onPaymentSuccess = (payment) => {
    setLoading(true);
    bookingMail({ ...data, paymentId: payment.id })
      .then(() => {
        setLoading(false);
        toast.success("Booked Successfully");
        handleNext();
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  const createIntent = () => {
    createPaymentIntent({ currency, amount })
      .then((response) => {
        setIntent(response.data);
      })
      .catch((error) => {
        toast.error(parseError(error));
      });
  };

  useEffect(() => {
    resetFormDetails();
    createIntent();
  }, [currency, amount, isOpen]);

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
            <form onSubmit={onNext}>
              <div className="form-group">
                <label htmlFor="email">Enter your Email to get started</label>
                <input
                  type="email"
                  placeholder="Enter your Email here"
                  required
                  value={data.email}
                  onChange={(e) => onChange("email", e.currentTarget.value)}
                />
                <button type="submit">Next</button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <form onSubmit={onNext}>
              <div className="form-group">
                <label htmlFor="name">Enter your name</label>
                <div className="form-group-wrapper">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={data.firstName}
                    onChange={(e) =>
                      onChange("firstName", e.currentTarget.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={data.lastName}
                    onChange={(e) =>
                      onChange("lastName", e.currentTarget.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={data.companyName}
                    onChange={(e) =>
                      onChange("companyName", e.currentTarget.value)
                    }
                  />

                  <input
                    type="text"
                    placeholder="Phone No."
                    required
                    value={data.phone}
                    onChange={(e) => onChange("phone", e.currentTarget.value)}
                  />
                </div>

                <label className="marginTop" htmlFor="address">
                  Enter your address
                </label>

                <input
                  type="text"
                  placeholder="Address"
                  required
                  value={data.address}
                  onChange={(e) => onChange("address", e.currentTarget.value)}
                />

                <div className="form-group-wrapper">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    value={data.city}
                    onChange={(e) => onChange("city", e.currentTarget.value)}
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    value={data.postalCode}
                    onChange={(e) =>
                      onChange("postalCode", e.currentTarget.value)
                    }
                  />
                </div>

                <button type="submit">Next</button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <Checkout
              intent={intent}
              loading={loading}
              onSuccess={onPaymentSuccess}
            />
          )}

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
