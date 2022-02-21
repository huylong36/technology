import React from "react";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  listProduct: [],
};
const createProductSlice = createSlice({
  name: "createProduct",
  initialState,
  reducers: {
    createProductReducer: (state, action) => {
      state.listProduct.push(action.payload);
    },
  },
});
const { reducer, actions } = createProductSlice;
export const { createProductReducer } = actions;
export default reducer;
