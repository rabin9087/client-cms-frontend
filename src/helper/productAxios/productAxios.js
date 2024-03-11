import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

export const productAPI = axiosAPI + "/products"

export const fetchProducts = (slug) => {
    return axiosProcesserAPI({
        method: 'get',
        url: slug ? productAPI + "/" + slug : productAPI,
    })
}

export const fetchAllProductsByCatID = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: productAPI + "/category/" + _id,
        data: _id
    })
}

export const UpdateProducts = (data) => {
    return axiosProcesserAPI({
        method: 'patch',
        url: productAPI,
        data
    })
}
