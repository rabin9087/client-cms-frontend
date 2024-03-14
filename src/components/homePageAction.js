import { fetchAllCarousel } from "../helper/home/homeAxios"
import { setCarouselImage } from "../pages/products/productSlice"

export const fetchAllCarouselAction = () => async (dispatch) => {
    const { status, carousel } = await fetchAllCarousel()
    if (status === "success") {
        dispatch(setCarouselImage(carousel))
    }
} 