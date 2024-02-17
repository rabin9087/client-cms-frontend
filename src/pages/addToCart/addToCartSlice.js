import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addToCartList: [],
};

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        setAddToCartList: (state, { payload }) => {
            state.addToCartList.push(payload)
        },
        setUpdateCartList: (state, { payload }) => {
            state.addToCartList.splice(payload, 1)
        },
    },
});

const { actions, reducer } = addToCartSlice;
export const { setAddToCartList, setUpdateCartList } = actions;
export default reducer;
