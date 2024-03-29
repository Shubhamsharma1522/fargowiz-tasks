import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;
      // console.log(action, "add to cart");
      const existingProduct = state.products.find(
        (product) => product.id === newProduct.id
      );

      const totalQuantityInCart = state.products.reduce((total, item) => {
        console.log(`${total} accu, ${item.quantity} current item`);
        return total + item.quantity;
      }, 0);

      if (existingProduct) {
        if (totalQuantityInCart + newProduct.quantity > 20) {
          toast.error("Cannot exceed more than 20 products");
          return;
        }
        existingProduct.quantity =
          existingProduct.quantity + newProduct.quantity || 1;
        toast.success("Product added to cart successfully!");
      } else {
        if (totalQuantityInCart + (newProduct.quantity || 1) > 20) {
          toast.error("Cannot exceed more than 20 products");
          return;
        }
        state.products.push(newProduct);
        toast.success("Product added to cart successfully!");
      }
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
      }
    },

    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find(
        (product) => product.id === productId
      );

      if (product && product.quantity > 1) {
        product.quantity--;
      }
    },

    removeToCart(state, action) {
      const productId = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productId
      );
    },

    clearCart(state) {
      state.products = [];
      toast.error("Cleared Your all Products...Now your cart is empty!!");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
