import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
  orderHistories: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

    SetAOrder: (state, { payload }) => {
      state.order = payload;
    },
    SetOrderHistory: (state, { payload }) => {

      state.orderHistories = payload
    },
  },
});

const { actions, reducer } = orderSlice;
export const { SetAOrder, SetOrderHistory } = actions;
export default reducer;
