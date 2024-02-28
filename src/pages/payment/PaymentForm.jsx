import {
  useStripe,
  CardElement,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { fetchPaymentIntent } from "../../helper/payment/payment";
import { useState } from "react";
const PaymentForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [form, setForm] = useState({});

  const handelOnAddressChange = async (e) => {
    e.preventDefault();
    const addressElement = elements.getElement("address");
    const { complete, value } = await addressElement.getValue();

    // if(complete){

    // }
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return alert("not ready to process the payment");
    }
    const resp = await fetchPaymentIntent({
      amount: totalAmount,
      currency: "aud",
      payment_method_type: "card",
    });
    console.log(resp);

    const { paymentIntent } = await stripe.confirmCardPayment(
      resp?.clientSecret,
      {
        payment_method: {
          card: elements.getElement("card"),
          billing_details: elements.getElement(AddressElement),
        },
      }
    );

    if (paymentIntent.status === "succeeded") {
      return alert("Your order has been placed successfully");
    }
    alert(
      "Unable to place your order, please try again or contact admininstartion"
    );
  };

  return (
    <div className=" border-2 ">
      <form>
        <div className="mt-4">
          <div>
            Address:
            <AddressElement
              className="p-4 bg-red-300"
              options={{
                mode: "shipping",
                defaultValues: {
                  name: "Jane Doe",
                  address: {
                    line1: "354 Oyster Point Blvd",
                    line2: "",
                    city: "South San Francisco",
                    state: "CA",
                    postal_code: "94080",
                    country: "US",
                  },
                },
              }}
              onChange={handelOnAddressChange}
            />
          </div>
          <div>
            Card:
            <CardElement
              className=" p-6 bg-blue-300"
              options={{ hidePostalCode: true }}
            />
          </div>
          <hr />
          <div className="flex justify-center">
            <button
              className="p-2 bg-blue-400 rounded-md"
              type="submit"
              onClick={handelOnSubmit}
            >
              Checkout
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
