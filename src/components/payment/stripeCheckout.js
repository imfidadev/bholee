import React, { useMemo } from "react";
import configs from "../../configs";
import {
  useStripe,
  useElements,
  Elements,
  ElementsConsumer,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(configs.stripePublicKey);

const CheckoutForm = ({ stripe, elements }) => {
  //   const stripe = useStripe();
  //   const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || !stripePromise) return;
    debugger;
    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: "https://example.com/order/123/complete",
      },
    });
    debugger;

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button>Submit</button>
    </form>
  );
};

const Checkout = ({ currency = "usd", amount }) => {
  const options = useMemo(() => ({
    mode: "payment",
    currency,
    amount,
  }));

  return (
    <Elements stripe={stripePromise} options={options}>
      <ElementsConsumer>
        {({ stripe, elements }) => (
          <CheckoutForm stripe={stripe} elements={elements} />
        )}
      </ElementsConsumer>
    </Elements>
  );
};

export default Checkout;
