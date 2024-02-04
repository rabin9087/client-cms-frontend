import { fetchCategories } from "../../helper/categoryAxios/categoryAxios"
import { setCategoryList } from "./categorySlice"

export const getAllCategoriesAction = () => async (dispatch) => {
    const { status, categories } = await fetchCategories()
    if (status === "success") {
        dispatch(setCategoryList(categories))
    }
}

export const getACategoryAction = (data) => async (dispatch) => {
    const { status, categories } = await fetchCategories()
    if (status === "success") {
        dispatch(setCategoryList(categories))
    }
}