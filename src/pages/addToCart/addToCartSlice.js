import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    addToCartList: [],
};

const addToCartSlice = createSlice({
    name: "addToCart",
    initialState,
    reducers: {
        setAddToCartList: (state, { payload }) => {
            const filter = state.addToCartList.filter((item) => item?._id === payload?._id && item?.size === payload?.size)

            if (filter.length > 0) {
                state.addToCartList.filter((item) => item?._id === payload?._id)[0].orderQty = payload.orderQty
            } else {
                state.addToCartList.push(payload)
            }

        },
        setUpdateCartList: (state, { payload }) => {

            state.addToCartList.splice(payload, 1)
        },
        setUpdateItemOfCart: (state, { payload }) => {

            state.addToCartList[payload.i].orderQty = payload.newOrderQty
        },
        DeleteAddToCartList: (state, { payload }) => {
            state.addToCartList.splice(0, payload)
        }
    },
});

const { actions, reducer } = addToCartSlice;
export const { setAddToCartList, setUpdateCartList, setUpdateItemOfCart, DeleteAddToCartList } = actions;
export default reducer;
