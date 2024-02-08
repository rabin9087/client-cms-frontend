import { fetchProducts } from "../../helper/productAxios/productAxios"
import { SetAProduct, setProductList } from "./productSlice"

export const fetchAllProducts = () => async (dispatch) => {
    const { status, products } = await fetchProducts()
    if (status === "success") {
        dispatch(setProductList(products.products))
    }


}

export const fetchAProduct = (slug) => async (dispatch) => {
    const { status, products } = await fetchProducts(slug)
    if (status === "success") {
        dispatch(SetAProduct(products))
    }
}