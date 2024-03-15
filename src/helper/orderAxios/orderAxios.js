import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

export const orderAPI = axiosAPI + "/orders"
export const postOrders = (data) => {
    return axiosProcesserAPI({
        method: 'post',
        url: orderAPI,
        data
    })
}

export const fetchAllProductsByCatID = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: orderAPI + "/category/" + _id,
        data: _id
    })
}

export const fetchAllOrderByUserId = (_id) => {
    return axiosProcesserAPI({
        method: 'get',
        url: orderAPI + "/userId/" + _id,

    })
}
