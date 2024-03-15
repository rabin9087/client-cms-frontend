import { fetchAllOrderByUserId, postOrders } from "../../helper/orderAxios/orderAxios"
import { SetAOrder, SetOrderHistory } from "./orderSlice"

export const postOrderProducts = (data) => async () => {
    const { status } = await postOrders(data)
    if (status === "success") {
        localStorage.setItem("orders", JSON.stringify(data))
        dispatchEvent(SetAOrder(data));
    }
}

export const fetchAllOrderByUSerIdAction = (_id) => async (dispatch) => {
    const { status, orders } = await fetchAllOrderByUserId(_id)
    console.log(orders)
    if (status === "success") {
        dispatch(SetOrderHistory(orders));
    }
}


