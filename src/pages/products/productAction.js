import { fetchAllProductsByCatID, fetchProducts, fetchProductsForYouMayLikebySlug, fetchProductsbySlug } from "../../helper/productAxios/productAxios"
import { setYouMayLikeProductList } from "../youMayLike/youMayLikeSlice"
import { SetAProduct, SetProductsByCatId, setCarouselImage, setComponentProductList, setProductList } from "./productSlice"

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
        dispatch(setCarouselImage(products?.images))
    }
}

export const fetchAllProductByslug = (slug) => async (dispatch) => {
    const { status, products } = await fetchProductsbySlug(slug)
    if (status === "success") {
        dispatch(setComponentProductList(products))
    }
}

export const fetchAllProductForYouMayLikByslugAction = (slug) => async (dispatch) => {
    const { status, products } = await fetchProductsForYouMayLikebySlug(slug)
    if (status === "success") {
        dispatch(setYouMayLikeProductList(products))
    }
}

export const fetchProductsById = (_id) => async (dispatch) => {
    const { status, products } = await fetchAllProductsByCatID(_id)
    if (status === "success") {
        dispatch(SetProductsByCatId(products))
    }
}