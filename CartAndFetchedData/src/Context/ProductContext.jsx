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
  const [showAlert, setShowAlert] = useState(false); 
  const [clearAlert, setClearAlert] = useState(false); 

  const addByQuantity = (newItem, quantity) => {
    console.log(cart, newItem, quantity, "addByQuantity");
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newItem.id
    );

    // Check if the total items in the cart exceed 20
    const cartLength = getCartItemsTotal(cart);
    if (cartLength + quantity > 20) {
      setShowAlert(true); 
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
    setClearAlert(true); 
    setCart([]);
  };

  return (
    <ProductContext.Provider
      value={{ cart, addByQuantity, clearCart, setShowAlert, setClearAlert }} // Pass showAlert and setClearAlert functions in value
    >
      {children}
    </ProductContext.Provider>
  );
};
