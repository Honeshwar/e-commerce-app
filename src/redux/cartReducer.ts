import { createSlice } from "@reduxjs/toolkit";
import type { CartStateType } from "./types/cartReducer.types";

const cartInitialState: CartStateType = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        // item.quantity += 1;
        // state.products = [...state.products,item];
        item.quantity += action.payload.quantity; // good feature of redux toolkit, throught reference change state ,internally return state store update tradition way work internally
      } else {
        state.products.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
