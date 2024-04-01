import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const loadCartState = () => {
  const serializedState = localStorage.getItem("cart");
  // console.log(JSON.parse(serializedState, "loacal cart state"));
  return JSON.parse(serializedState);
};

const saveCartState = (state) => {
  const serializedState = JSON.stringify(state);
  // console.log(serializedState, "save cart state");
  localStorage.setItem("cart", serializedState);
};

const cartSlice = createSlice({
  name: "cart",
  initialState: loadCartState() || { products: [] },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      const totalQuantityInCart = state.products.reduce(
        (total, item) => total + item.quantity,
        0
      );

      if (existingProduct) {
        if (totalQuantityInCart + newProduct.quantity > 20) {
          toast.error("Cannot exceed more than 20 products");
          return;
        }
        existingProduct.quantity += newProduct.quantity;
        toast.success("Product added to cart successfully!");
      } else {
        if (totalQuantityInCart + newProduct.quantity > 20) {
          toast.error("Cannot exceed more than 20 products");
          return;
        }
        state.products.push(newProduct);
        toast.success("Product added to cart successfully!");
      }
      saveCartState(state);
    },

    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      const totalProductQuantity = state.products.reduce(
        (total, product) => total + product.quantity,
        0
      );

      if (product) {
        if (totalProductQuantity + 1 > 20) {
          toast.error("Cannot exceed limit");
          return;
        }
        product.quantity++;
        toast.success("Product added to cart successfully!");
        saveCartState(state);
      }
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product && product.quantity > 1) {
        product.quantity--;
        saveCartState(state);
      }
    },

    removeToCart(state, action) {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
      saveCartState(state);
    },

    clearCart(state) {
      state.products = [];
      toast.error("Cleared Your all Products...Now your cart is empty!!");
      saveCartState(state);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
