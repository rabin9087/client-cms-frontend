import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList: [],
    product: {},
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
        }
    }
})

const { actions, reducer } = productSlice
export const { setProductList, SetAProduct } = actions
export default reducer