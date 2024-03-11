import { fetchAllProductsByCatID, fetchProducts } from "../../helper/productAxios/productAxios"
import { SetAProduct, SetProductsByCatId, setProductList } from "./productSlice"

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

export const fetchProductsById = (_id) => async (dispatch) => {
    const { status, products } = await fetchAllProductsByCatID(_id)
    if (status === "success") {
        dispatch(SetProductsByCatId(products))
    }
}