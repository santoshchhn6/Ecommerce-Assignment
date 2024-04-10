import { createSlice } from "@reduxjs/toolkit";

const filteredProductSlice = createSlice({
  name: "filteredProducts",
  initialState: { filteredProducts: [] },
  reducers: {
    setFilteredProduct(state, action) {
      state.filteredProducts = action.payload;
    },
  },
});

export const { setFilteredProduct } = filteredProductSlice.actions;
export default filteredProductSlice;
