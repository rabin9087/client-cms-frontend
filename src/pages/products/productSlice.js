import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    productList:[]
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        setProductList : (state, {payload}) => {
            state.productList = payload
        }
    }
})

const {actions, reducer} = productSlice
export const {setProductList} = actions
export default reducer