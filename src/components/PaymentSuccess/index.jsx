import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { bookingMail } from "../../api/actions";
import { parseError } from "../../utils";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paymentId = searchParams.get("payment_intent");

  const metadata = searchParams.get("metadata")
    ? JSON.parse(searchParams.get("metadata"))
    : null;

  if (!paymentId || !metadata) navigate("/events");

  const [loading, setLoading] = useState(false);

  const sendMail = () => {
    setLoading(true);
    bookingMail({
      ...metadata,
      paymentId,
    })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        toast.error(parseError(error));
      });
  };

  useEffect(() => {
    sendMail();
  }, []);

  return (
    <div className="thank-you">
      <h2>Thank you for your Registration</h2>
      <p>We will Get back to you Soon!</p>
    </div>
  );
};

export default PaymentSuccess;
