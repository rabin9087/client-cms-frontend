import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
const Payment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const STRIPE_SECRET_KEY =
    "pk_test_51OdhKNL18eO1NJXbPtrqRKGrNBF5OCX8LEd5OyfqN0k8uuhyMlQBNoJIHcZaYO22hzaoUHsMLCMJ1W3gWuID3kya003qmxM2KE";
  // const stripePromise = loadStripe(import.meta.env.STRIPE_SECRET_KEY);
  const stripePromise = loadStripe(STRIPE_SECRET_KEY);

  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  const options = {
    // Fully customizable with appearance API.
    appearance: {/*...*/},
  };

  useEffect(() => {
    const amount = addToCartList.reduce((acc, { price, orderQty }) => {
      return acc + price * orderQty;
    }, 0);
    setTotalAmount(amount);
  }, [addToCartList]);

  return (
    <UserLayout>
      <div className="text-2xl ">
        <div className="flex justify-center">
          Payment Method <br />
          Your total amount is: $ {totalAmount}
        </div>

        <Elements stripe={stripePromise} options={options}>
          <PaymentForm totalAmount={totalAmount} />
        </Elements>
      </div>
    </UserLayout>
  );
};

export default Payment;
