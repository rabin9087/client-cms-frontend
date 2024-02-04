import { axiosAPI, axiosProcesserAPI } from "../axios/axios";

const categoryAPI = axiosAPI + "/categories"

export const fetchCategories = () => {
   return axiosProcesserAPI({
        method: 'get',
        url: categoryAPI,
    })
}