import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import searchSlice from "./searchSlice";
import filteredProductSlice from "./filteredProductSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    checkout: checkoutSlice.reducer,
    products: productSlice.reducer,
    auth: authSlice.reducer,
    search: searchSlice.reducer,
    filteredProducts: filteredProductSlice.reducer,
  },
});

export default store;
