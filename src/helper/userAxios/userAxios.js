import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

export const userAPI = axiosAPI + "/users"

export const createAUser = (data) => {
    return axiosProcesserAPI({
        method: 'post',
        url: userAPI,
        data
    })
}

export const signInUser = (data) => {
    return axiosProcesserAPI({
        method: 'post',
        url: userAPI + "/logIn",
        data
    })
}

export const autoLogInUser = (data) => {
    return axiosProcesserAPI({
        method: 'post',
        url: userAPI + "/",
        data
    })
}

export const featchNewAccessJWT = () => {
    return axiosProcesserAPI({
        method: 'get',
        url: userAPI + "/get-accessjwt",
        refreshToken: true,
    })
}

