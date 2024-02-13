import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: [],
    product: {},
    productsByCatId: []
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
        }
    }
})

const { actions, reducer } = productSlice
export const { setProductList, SetAProduct, SetProductsByCatId } = actions
export default reducer