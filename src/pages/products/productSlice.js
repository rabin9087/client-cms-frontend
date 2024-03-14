import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: [],
    product: {},
    productsByCatId: [],
    carouselImage: [],
    componentProductList: []
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProductList: (state, { payload }) => {
            state.productList = payload
        },
        SetAProduct: (state, { payload }) => {
            state.product = payload
        },
        SetProductsByCatId: (state, { payload }) => {
            state.productsByCatId = payload
        },
        setCarouselImage: (state, { payload }) => {
            state.carouselImage = payload
        },
        setComponentProductList: (state, { payload }) => {
            state.componentProductList = payload
        },
    }
})

const { actions, reducer } = productSlice
export const { setProductList, SetAProduct, SetProductsByCatId, setCarouselImage, setComponentProductList } = actions
export default reducer