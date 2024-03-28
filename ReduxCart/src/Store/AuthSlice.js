import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticate: false,
    user: {},
  },
  reducers: {
    login(state, action) {
      state.isAuthenticate = true;
      state.user = { email: action.payload.email };
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
