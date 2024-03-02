import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {

    SetAOrder: (state, { payload }) => {
      state.order = payload;
    },
  },
});

const { actions, reducer } = orderSlice;
export const { SetAOrder } = actions;
export default reducer;
