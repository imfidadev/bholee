import React, { useEffect, useState } from "react";
import Checkout from "../payment/stripeCheckout";
import { bookingMail } from "../../api/actions";
import { toast } from "react-toastify";
import { parseError } from "../../utils";

const PaymentFormSteps = ({ isOpen, selected }) => {
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const [data, setData] = useState({
    referralCode: "",
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
      referralCode: "",
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
    setCurrentStep(currentStep + 1);
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

  useEffect(() => {
    resetFormDetails();
  }, [isOpen]);

  return (
    <div className="form-step">
      <h1>Complete your booking</h1>
      <div className="form-step-wrapper">
        <div className="col left-col">
          <ul>
            <li className={currentStep === 1 ? "active" : ""}>
              <span>1</span>
              Referral Code
            </li>
            <li className={currentStep === 2 ? "active" : ""}>
              <span>2</span>
              Review Plan
            </li>
            <li className={currentStep === 3 ? "active" : ""}>
              <span>3</span>
              Your Email
            </li>
            <li className={currentStep === 4 ? "active" : ""}>
              <span>4</span>
              Your Billing Address
            </li>
            <li className={currentStep === 5 ? "active" : ""}>
              <span>5</span>
              Payment
            </li>
          </ul>
        </div>

        <div className="col right-col">
          {currentStep === 1 && (
            <form onSubmit={onNext}>
              <div className="form-group">
                <label htmlFor="referralCode">Enter your referral Code</label>
                <input
                  type="text"
                  placeholder="Enter your Referral Code here"
                  value={data.referralCode}
                  onChange={(e) =>
                    onChange("referralCode", e.currentTarget.value)
                  }
                />
                <button type="submit">Next</button>
              </div>
            </form>
          )}

          {currentStep === 2 && (
            <div className="form-group">
              <div className="payment-card confirm-payment">
                <h3>{selected.cardTitle}</h3>
                <h5>{selected.cardDesc}</h5>
                <h3>{selected.price.type}</h3>
                <p>{selected.price.title}</p>

                <h4
                  className={
                    selected.price.priceDetail.isDiscount ? "line-through" : ""
                  }
                >
                  ${selected.price.amount}
                </h4>

                {selected.price.priceDetail.isDiscount && (
                  <>
                    <h4>${selected.price.priceDetail.price}</h4>
                    <h5>{selected.price.priceDetail.till}</h5>
                  </>
                )}
              </div>
              <button onClick={handleNext}>Next</button>
            </div>
          )}

          {currentStep === 3 && (
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

          {currentStep === 4 && (
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

          {currentStep === 5 && (
            <Checkout
              packageDetails={selected}
              user={data}
              loading={loading}
              onSuccess={onPaymentSuccess}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentFormSteps;
