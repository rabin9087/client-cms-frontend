
import { axiosProcesserAPI } from '../axios/axios'

const rootAPI = import.meta.env.VITE_ROOT_API
export const axiosAPI = rootAPI + "/api/v1"
export const homeAPI = axiosAPI + "/home"

export const fetchAllCarousel = () => {
    return axiosProcesserAPI({
        method: 'get',
        url: homeAPI,
    })
}