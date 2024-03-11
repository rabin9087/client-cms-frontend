import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import UserLayout from "../layout/UserLayout";
const Payment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const STRIPE_SECRET_KEY =
    "pk_test_51OdhKNL18eO1NJXbPtrqRKGrNBF5OCX8LEd5OyfqN0k8uuhyMlQBNoJIHcZaYO22hzaoUHsMLCMJ1W3gWuID3kya003qmxM2KE";
  // const stripePromise = loadStripe(import.meta.env.STRIPE_SECRET_KEY);
  const stripePromise = loadStripe(STRIPE_SECRET_KEY);

  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  const options = {
    // Fully customizable with appearance API.
    appearance: {
      /*...*/
    },
  };

  useEffect(() => {
    const amount = addToCartList.reduce((acc, { price, orderQty }) => {
      return acc + price * orderQty;
    }, 0);
    setTotalAmount(amount);
  }, [addToCartList]);

  return (
    <UserLayout>
      <div className="text-2xl m-4">
        <div className="flex justify-around sm:justify-center gap-4 border-b-2 p-4">
          <p>Total </p>
          <p> $ {totalAmount}</p>
        </div>
        <p className="mb-4 text-center">Select a payment method</p>
        <div className="flex justify-center m-2  text-center">
          <ul className="w-48 text-sm flex justify-center gap-2 ">
            <li className="w-full border">
              <div className="flex items-center ps-3">
                <input
                  id="card"
                  type="radio"
                  value="card"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  checked={paymentMethod === "card"}
                  name="paymentMethod"
                  className="w-4 h-4 text-blue-600 "
                />
                <label
                  htmlFor="card"
                  className="w-full py-3 ms-2 text-sm font-medium "
                >
                  Card
                </label>
              </div>
            </li>
            <li className="w-full border">
              <div className="flex items-center ps-3">
                <input
                  id="cash"
                  type="radio"
                  value="cash"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  checked={paymentMethod === "cash"}
                  name="paymentMethod"
                  className="w-4 h-4 text-blue-600 "
                />
                <label
                  htmlFor="cash"
                  className="w-full py-3 ms-2 text-sm font-medium "
                >
                  Cash
                </label>
              </div>
            </li>
          </ul>
        </div>
        <Elements stripe={stripePromise} options={options}>
          <PaymentForm totalAmount={totalAmount} paymentBy={paymentMethod} />
        </Elements>
      </div>
    </UserLayout>
  );
};

export default Payment;
