import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

export const productAPI = axiosAPI + "/products"

export const fetchProducts = (slug) => {
    return axiosProcesserAPI({
        method: 'get',
        url: slug ? productAPI + "/" + slug : productAPI,
    })
}