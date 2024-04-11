import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: { items: [] },
  reducers: {
    addToCheckout(state, action) {
      state.items.push(action.payload);
    },
    addManyCheckout(state, action) {
      state.items.push(...action.payload);
    },
    resetCheckout(state) {
      state.items = [];
    },
  },
});

export const { addToCheckout, addManyCheckout, resetCheckout } =
  checkoutSlice.actions;
export default checkoutSlice;
