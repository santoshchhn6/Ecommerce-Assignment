import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { LoggedIn: true },
  reducers: {
    login(state) {
      state.LoggedIn = true;
    },
    logout(state) {
      state.LoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice;
