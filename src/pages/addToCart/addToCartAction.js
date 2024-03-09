import { toast } from "react-toastify"
import { createCartList, fetchCartList } from "../../helper/addToCart/addToCart"
import { setAddToCartList } from "./addToCartSlice"

export const createAddToCartAction = (data) => async (dispatch) => {
    console.log("createAddToCartAction", data)
    const resp = await createCartList(data)
    if (resp) {
        dispatch(setAddToCartList(data))
    }
}

export const fetchAllCartList = () => async (dispatch) => {
    const resp = await fetchCartList()
    if (resp) {
        dispatch(setAddToCartList(resp.carts))
    }
}