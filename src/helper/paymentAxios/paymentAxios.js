import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

const paymentAPI = axiosAPI + "/payment"

export const fetchPaymentIntent = (data) => {
    return axiosProcesserAPI({
         method: 'post',
         url: paymentAPI + "/create-payment-intent",
         data
     })
 }