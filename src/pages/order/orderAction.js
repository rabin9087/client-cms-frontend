import { postOrders } from "../../helper/orderAxios/orderAxios"
import { SetAOrder } from "./orderSlice"

export const postOrderProducts = (data) => async (dispatch) => {

    const { status, orders } = await postOrders(data)
    if (status === "success") {
        const { ...orderDetails } = orders
        localStorage.setItem("orders", JSON.stringify(orderDetails))
        //dispatch(SetAOrder(orders));
    }
}


