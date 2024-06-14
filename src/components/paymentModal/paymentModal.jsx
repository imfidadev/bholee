import React, { useEffect, useState } from "react";
import "./style.scss";
import DetailsStep from "../home/detailsStep";
import SelectPayment from "../home/selectPaymentStep";
import PaymentFormSteps from "../home/paymentFormsteps";

const PaymentModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  if (!isOpen) return null;

  const goToNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? "open" : "close"}`}
      onClick={onClose}
    >
      <div
        className={`modal-content ${isOpen ? "open" : "close"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {currentStep === 1 && <DetailsStep goToNextStep={goToNextStep} />}
        {currentStep === 2 && <SelectPayment goToNextStep={goToNextStep} />}
        {currentStep === 3 && <PaymentFormSteps />}
      </div>
    </div>
  );
};

export default PaymentModal;
