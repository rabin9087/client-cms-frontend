import {
  useStripe,
  CardElement,
  useElements,
  AddressElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { fetchPaymentIntent } from "../../helper/payment/payment";
import { useState } from "react";
const PaymentForm = ({ totalAmount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [addressDetails, setAddressDetails] = useState(true);
  const [cardDetails, setCardDetails] = useState(false);

  const handelOnAddressChange = async () => {
    const addressElement = elements.getElement("address");
    console.log(addressElement)
    const { complete, value } = await addressElement.getValue();
    console.log(complete, value);
    if (complete) {
      setCardDetails(true);
    }
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    console.log(stripe, elements);
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
          card: elements.getElement(CardElement),
          billing_details: elements.getElement(AddressElement),
        },
      }
    );
    console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      return alert("Your order has been placed successfully");
    }
    alert(
      "Unable to place your order, please try again or contact admininstartion"
    );
  };

  return (
    <div className="font-medium m-4">
      <form className="block md:flex justify-center mt-4 gap-4">
        <div className=" md:w-1/2 md:ms-7 border-2">
          <div>
            <AddressElement
              className="p-4"
              options={{
                mode: "shipping",
                defaultValues: {
                  address: {
                    country: "AU",
                  },
                },
                fields: {
                  phone: "always",
                  email: "always",
                },
                validation: {
                  phone: {
                    required: "always",
                  },
                  email: {
                    required: "always",
                  },
                },
              }}
              onChange={(e) => handelOnAddressChange(e)}
            />
          </div>
        </div>

        {cardDetails && (
          <div className="md:w-1/2 md:ms-7 h-fit p-4">
            <div className=" border-2 p-4">
              Card:
              <CardElement options={{ hidePostalCode: true }} />
            </div>

            <div className="grid-d w-1/2 justify-center text-center mt-4 mb-2 rounded-lg lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500">
              <button type="submit" onClick={handelOnSubmit}>
                check out
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default PaymentForm;
