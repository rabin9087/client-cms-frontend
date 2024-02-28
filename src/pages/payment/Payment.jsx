import { AddressElement, Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
const Payment = ({ totalAmount }) => {
  const stripePromise = loadStripe(import.meta.env.STRIPE_SECRET_KEY);

  return (
    <div className=" text-2xl font-medium md:w-1/2 md:ms-7 mt-4 md:mt-0">
      Payment Method <br />
      Your total amount is: $ {totalAmount}
      <hr />
      <br />
      <Elements stripe={stripePromise}>
        <PaymentForm totalAmount={totalAmount} />
      </Elements>
    </div>
  );
};

export default Payment;
