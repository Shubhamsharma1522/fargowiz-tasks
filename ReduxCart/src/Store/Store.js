import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import authSlice from "./AuthSlice";

const combinedReducer = combineReducers({
  cart: cartSlice.reducer,
  auth: authSlice.reducer,
});

const store = configureStore({
  reducer: combinedReducer,
});

export default store;
