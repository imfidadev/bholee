import React, { useState } from "react";
import configs from "../../configs";
import {
  Elements,
  ElementsConsumer,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";
import { createPaymentIntent } from "../../api/actions";
import { parseError } from "../../utils";

const stripePromise = loadStripe(configs.stripePublicKey);

const CheckoutForm = ({
  user,
  currency,
  amount,
  stripe,
  loading,
  elements,
  onSuccess,
}) => {
  const [paymentLoading, setPaymentLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setPaymentLoading(true);

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setPaymentLoading(false);
      toast.error(parseError(submitError));
      return;
    }

    createPaymentIntent({ currency, amount })
      .then(async (response) => {
        const { error, paymentIntent } = await stripe.confirmPayment({
          elements,
          clientSecret: response.data.clientSecret,
          redirect: "if_required",
          confirmParams: {
            return_url: `${
              configs.appURL
            }/checkout/success?user=${JSON.stringify(user)}`,
          },
        });

        setPaymentLoading(false);

        if (error) {
          toast.error(error.message);
        } else {
          if (paymentIntent.status === "succeeded") {
            onSuccess(paymentIntent);
            if (
              paymentIntent.next_action &&
              paymentIntent.next_action.type === "redirect_to_url"
            ) {
              window.location.replace(
                paymentIntent.next_action.redirect_to_url.url
              );
            }
          }
        }
      })
      .catch((error) => {
        setPaymentLoading(false);
        toast.error(parseError(error));
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="form-group">
        <button disabled={!stripe || loading || paymentLoading}>
          {loading || paymentLoading ? "Loading..." : "Pay"}
        </button>
      </div>
    </form>
  );
};

const Checkout = ({ user, currency, amount, loading, onSuccess }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        currency,
        amount,
      }}
    >
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutForm
            user={user}
            currency={currency}
            amount={amount}
            loading={loading}
            stripe={stripe}
            elements={elements}
            onSuccess={onSuccess}
          />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default Checkout;
