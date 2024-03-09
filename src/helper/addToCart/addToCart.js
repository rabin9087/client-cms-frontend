import { axiosProcesserAPI, axiosAPI } from "../axios/axios";
const addTocartAPI = axiosAPI + "/addToCart"

export const fetchCartList = () => {
    return axiosProcesserAPI({
        method: 'get',
        url: addTocartAPI
    })
}

export const createCartList = (data) => {
    return axiosProcesserAPI({
        method: 'post',
        url: addTocartAPI,
        data
    })
}