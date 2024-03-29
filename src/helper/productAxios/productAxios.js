import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

export const productAPI = axiosAPI + "/products"

export const fetchProducts = (slug) => {
    return axiosProcesserAPI({
        method: 'get',
        url: slug ? productAPI + "/" + slug : productAPI,
    })
}

export const fetchProductsbySlug = (slug) => {
    return axiosProcesserAPI({
        method: 'get',
        url: productAPI + "/slug/" + slug,
    })
}

export const fetchProductsForYouMayLikebySlug = (slug) => {
    return axiosProcesserAPI({
        method: 'get',
        url: productAPI + "/you-may-like/" + slug,
    })
}

export const fetchAllProductsByCatID = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: productAPI + "/category/" + _id,
        data: _id
    })
}

export const fetchAProductsById = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: productAPI + "/product/" + _id,

    })
}

export const UpdateProducts = (data) => {
    return axiosProcesserAPI({
        method: 'patch',
        url: productAPI,
        data
    })
}
