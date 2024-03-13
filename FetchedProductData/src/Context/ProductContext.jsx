import { createContext, useContext } from "react";

export const ProductContext = createContext({
  items: [],
  addToCart: (item) => {},
  removeToCart: (id) => {},
  clearCart: () => {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ProductContext.Provider;
