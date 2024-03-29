
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
  user: JSON.parse(localStorage.getItem("user")) || {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.user = { email: action.payload.email };
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = {};
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;









































































































// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isAuthenticated: false,
//     user: {},
//   },
//   reducers: {
//     login(state, action) {
//       state.isAuthenticated = true;
//       state.user = { email: action.payload.email };
//     },
//     logout(state) {
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const authActions = authSlice.actions;
// export default authSlice;

