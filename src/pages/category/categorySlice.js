import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryList: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategoryList: (state, { payload = [] }) => {
      state.categoryList = payload;
    },
  },
});

const { actions, reducer } = categorySlice;
export const { setCategoryList } = actions;
export default reducer;
