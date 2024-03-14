import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    youMayLikeProductList: [],
}

const userSlice = createSlice({
    name: "youMayLikeProductList",
    initialState,
    reducers: {
        setYouMayLikeProductList: (state, { payload }) => {
            state.youMayLikeProductList = payload
        },

    }
})

const { actions, reducer } = userSlice
export const { setYouMayLikeProductList } = actions
export default reducer