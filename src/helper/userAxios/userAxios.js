import { axiosProcesserAPI, userAPI } from "../axios/axios";

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

export const LogOutUser = (_id) => {
    return axiosProcesserAPI({
        method: 'post',
        url: userAPI + "/logout",
        data: { _id }
    })
}

