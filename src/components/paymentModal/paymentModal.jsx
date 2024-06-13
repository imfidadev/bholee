import React, { useEffect } from "react";
import "./style.scss";

const PaymentModal = ({ isOpen, onClose, children }) => {
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

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : 'close'}`} onClick={onClose}>
      <div className={`modal-content ${isOpen ? 'open' : 'close'}`} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default PaymentModal;
