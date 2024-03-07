import axios from 'axios'
import { featchNewAccessJWT } from '../userAxios/userAxios'

const rootAPI = import.meta.env.VITE_ROOT_API
export const axiosAPI = rootAPI + "/api/v1"

export const getAccessJWT = () => {
    return sessionStorage.getItem("accessJWT")
}

export const getRefreshJWT = () => {
    return localStorage.getItem("refreshJWT")
}

export const axiosProcesserAPI = async ({ method, url, refreshToken, ...rest }) => {

    try {
        const token = refreshToken ? getRefreshJWT() : getAccessJWT()
        const headers = {
            Authorization: token
        }
        const { data } = await axios({
            method, url, headers, ...rest,
        })
        return data

    } catch (error) {
        if (error.response?.data?.message?.includes("jwt expired")) {
            const { accessJWT } = await featchNewAccessJWT()

            if (accessJWT) {
                sessionStorage.setItem("accessJWT", accessJWT)
                return axiosProcesserAPI({ method, url, ...rest, refreshToken })
            }
        }
        return {
            status: "error",
            message: error.response.data.message
        }
    }
}