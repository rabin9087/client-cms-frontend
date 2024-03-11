import { postOrders } from "../../helper/orderAxios/orderAxios"
import { UpdateProducts } from "../../helper/productAxios/productAxios"
import { SetAOrder } from "./orderSlice"

export const postOrderProducts = (data) => async (dispatch) => {
    await UpdateProducts(data.items)
    const { status, orders } = await postOrders(data)
    if (status === "success") {
        const { ...orderDetails } = orders
        localStorage.setItem("orders", JSON.stringify(orderDetails))
        dispatch(SetAOrder(orderDetails))
        dispatch()
    }
}


