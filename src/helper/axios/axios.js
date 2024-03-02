import axios from 'axios'

const rootAPI = import.meta.env.VITE_ROOT_API
export const axiosAPI = rootAPI + "/api/v1"

export const axiosProcesserAPI = async ({ method, url, ...rest }) => {
   
    try {
        const { data } = await axios({
            method, url, ...rest,
        })
        return data

    } catch (error) {
        return error.message
    }
}