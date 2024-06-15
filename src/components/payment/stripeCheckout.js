import React from "react";
import configs from "../../configs";
import {
  Elements,
  ElementsConsumer,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "react-toastify";

const stripePromise = loadStripe(configs.stripePublicKey);

const CheckoutForm = ({ stripe, loading, elements, onSuccess }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
      //   confirmParams: {
      //     return_url: "https://example.com/order/123/complete",
      //   },
    });

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
        //  else {
        //   onSuccess(paymentIntent);
        // }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <div className="form-group">
        <button>{loading ? "Loading..." : "Pay"}</button>
      </div>
    </form>
  );
};

const Checkout = ({ intent, loading, onSuccess }) => {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret: intent.clientSecret,
      }}
    >
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutForm
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
