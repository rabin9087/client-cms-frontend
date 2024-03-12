import { postOrders } from "../../helper/orderAxios/orderAxios"
import { UpdateProducts } from "../../helper/productAxios/productAxios"
import { SetAOrder } from "./orderSlice"

export const postOrderProducts = (data) => async (dispatch) => {

    const { status, orders } = await postOrders(data)
    await UpdateProducts(data.items)
    if (status === "success") {
        console.log(orders)
        const { ...orderDetails } = orders
        localStorage.setItem("orders", JSON.stringify(orderDetails))
        dispatch(SetAOrder(orders));
    }
}


