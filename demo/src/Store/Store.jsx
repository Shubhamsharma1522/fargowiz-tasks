// store.js
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const Store = configureStore({
  reducer: {
    products: product.reducer,
    cart: cart.reducer,
  },
});

export default Store;
