import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { username: "" },
  reducers: {
    addUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const actions = userSlice.actions;
export default userSlice;
