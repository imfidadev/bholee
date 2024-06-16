import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { bookingMail } from "../../api/actions";
import { parseError } from "../../utils";
import { toast } from "react-toastify";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user")
    ? JSON.parse(searchParams.get("user"))
    : null;
  const paymentId = searchParams.get("payment_intent");
  const packageDetails = searchParams.get("package")
    ? JSON.parse(searchParams.get("package"))
    : null;

  const price = searchParams.get("price")
    ? JSON.parse(searchParams.get("price"))
    : null;

  if (!user || !paymentId || !packageDetails || !price) navigate("/events");

  const [loading, setLoading] = useState(false);

  const sendMail = () => {
    setLoading(true);
    bookingMail({ ...user, paymentId, ...packageDetails, ...price })
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

  return <h2>Thank you </h2>;
};

export default PaymentSuccess;
