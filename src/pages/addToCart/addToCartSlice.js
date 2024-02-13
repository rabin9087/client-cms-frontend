import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addToCartList: [],
};

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        setAddToCartList: (state, { payload }) => {
            state.addToCartList = payload;
        },

    },
});

const { actions, reducer } = addToCartSlice;
export const { setAddToCartList } = actions;
export default reducer;
