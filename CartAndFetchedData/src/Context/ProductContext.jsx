import { createContext, useContext, useState } from "react";
import { getCartItemsTotal } from "../util/formatting"; // Importing getCartItemsTotal

export const ProductContext = createContext({
  cart: [],
  setShowAlert: () => {},
  setClearAlert: () => {},
  addByQuantity: (newItem, quantity) => {},
  clearCart: () => {},
});

export const useProduct = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addByQuantity = (newItem, quantity) => {
    console.log(cart, newItem, quantity, "addByQuantity");
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newItem.id
    );

    // Check if the total items in the cart exceed 20
    const cartLength = getCartItemsTotal(cart);
    if (cartLength + quantity > 20) {
      alert("Can not exceed limit ")
      return;
    }

    const updatedItems = [...cart];

    if (existingCartItemIndex > -1) {
      const existingItem = cart[existingCartItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + quantity,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...newItem, quantity });
    }
    setCart(updatedItems);
  };

  const clearCart = () => {
    alert("Cleared added items")
    setCart([]);
  };

  return (
    <ProductContext.Provider value={{ cart, addByQuantity, clearCart }}>
      {children}
    </ProductContext.Provider>
  );
};
