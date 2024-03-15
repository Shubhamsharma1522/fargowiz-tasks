import { createContext, useContext } from "react";

export const ProductContext = createContext({
  items: [],

  //functionalities
  // addToCart: (item, quantity) => {},
  addByQuantity: (item, quantity) => {},
  clearCart: () => {},
});

//costom hook
export const useProduct = () => {
  return useContext(ProductContext);
};

//Provider refrence
export const ProductProvider = ProductContext.Provider;
