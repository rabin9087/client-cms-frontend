import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

const productAPI = axiosAPI + "/products"

export const fetchProducts = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: _id ? productAPI + "/" + _id : productAPI,
    })
}