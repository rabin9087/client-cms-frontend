import {
  useStripe,
  CardElement,
  useElements,
  AddressElement,
} from "@stripe/react-stripe-js";
import { fetchPaymentIntent } from "../../helper/paymentAxios/paymentAxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postOrderProducts } from "../order/orderAction";
import { DeleteAddToCartList } from "../addToCart/addToCartSlice";
import { toast } from "react-toastify";
import { UpdateProducts } from "../../helper/productAxios/productAxios";
const PaymentForm = ({ totalAmount, paymentBy }) => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardDetails, setCardDetails] = useState(false);
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const { addToCartList } = useSelector((state) => state.addToCartInfo);
  const { user } = useSelector((state) => state.userInfo);

  const handelOnAddressChange = async () => {
    const addressElement = elements.getElement("address");
    const { complete } = await addressElement.getValue();
    if (complete) {
      setCardDetails(true);
    }
  };

  const handelOnChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements.getElement(AddressElement)) {
      return toast.error("Please Enter Address and Card details ");
    }
    setLoading(true);

    const addressElement = elements.getElement(AddressElement);
    const { value } = await addressElement.getValue();
    const updateForm = { ...form, ...value };
    setForm(updateForm);

    // payment by Card
    if (paymentBy === "card") {
      const data = await fetchPaymentIntent({
        amount: totalAmount,
        currency: "aud",
        payment_method_type: "card",
      });

      const { paymentIntent } = await stripe.confirmCardPayment(
        data?.clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: updateForm,
          },
        }
      );

      if (paymentIntent.status === "succeeded" && paymentBy === "card") {
        dispatch(
          postOrderProducts({
            userId: user._id || "",
            dispatchedQty: 0,
            items: addToCartList,
            address: updateForm,
            pay: paymentIntent,
            amount: totalAmount,
          })
        );
      }
      await UpdateProducts({ items: addToCartList });
      dispatch(DeleteAddToCartList(addToCartList.length));
      setLoading(false);
      console.log(loading);
      return (
        navigate("/orders") && alert("Items has been ordered successfully")
      );
    }
    if (paymentBy === "cash") {
      dispatch(
        postOrderProducts({
          userId: user._id || "",
          dispatchedQty: 0,
          items: addToCartList,
          address: updateForm,
          pay: "cash",
          amount: totalAmount,
        })
      );

      setLoading(false);
      dispatch(DeleteAddToCartList(addToCartList.length));
      return (
        navigate("/orders") && alert("Items has been ordered successfully")
      );
    }
    return alert(
      "Unable to place your order, please try again or contact admininstartion"
    );
  };

  return (
    <div className="font-medium">
      {totalAmount <= 0 && (
        <div className="flex justify-center items-center p-2 m-auto border-2 bg-red-400">
          Please add Items in cart first
        </div>
      )}
      {totalAmount > 0 && (
        <form
          className="block md:flex justify-center mt-4 gap-4"
          onSubmit={handelOnSubmit}
        >
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
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter you email"
                  onChange={handelOnChange}
                />
              </div>
              {paymentBy === "card" && (
                <div className=" border-2 p-4 mt-4">
                  Card:
                  <CardElement options={{ hidePostalCode: true }} required />
                </div>
              )}

              <div
                className={
                  "grid-d justify-center text-center mt-4 mb-2 rounded-lg lg:text-xl text-white bg-blue-700 hover:bg-green-800 focus:ring-4 font-medium text-sm lg:px-1 px-4 py-1.5 sm:py-2.5 dark:bg-blue-500 dark:hover:bg-green-500"
                }
              >
                <button
                  type="submit"
                  className={loading ? "spinnerCheckOut" : ""}
                >
                  {loading ? "" : "check out "}
                </button>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default PaymentForm;
