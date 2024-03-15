import { useState, useEffect } from "react";
import { ProductProvider } from "./Context/ProductContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";
import { getCartItemsTotal } from "./util/formatting.js";

function App() {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [clearAlert, setClearAlert] = useState(false);

  useEffect(() => {
    let alertTimer;

    if (showAlert) {
      // Show alert for 3 seconds
      alertTimer = setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(alertTimer);
    };
  }, [showAlert]);

  useEffect(() => {
    let clearTimer;

    if (clearAlert) {
      // Show alert for 3 seconds
      clearTimer = setTimeout(() => {
        setClearAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(clearTimer);
    };
  }, [clearAlert]);

  //Methods

  const addByQuantity = (newItem, quantity) => {
    console.log(cart, newItem, quantity, "addByQuantity");
    const existingCartItemIndex = cart.findIndex(
      (item) => item.id === newItem.id
    );

    // Check if the total items in the cart exceed 20
    const cartLength = getCartItemsTotal(cart);
    if (cartLength + quantity >= 20) {
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
    //pass methods as a value
    <ProductProvider value={{ cart, clearCart, addByQuantity }}>
      <Cart />
      <ProductList />
      {showAlert && (
        <div className="notification">
          <span className="close" onClick={() => setShowAlert(false)}>
            &times;
          </span>
          <p>Can't exceed more than 20 items in the cart</p>
        </div>
      )}
      {clearAlert && (
        <div className="notification">
          <span className="close" onClick={() => setClearAlert(false)}>
            &times;
          </span>
          <p>All added items are cleared</p>
        </div>
      )}
    </ProductProvider>
  );
}

export default App;
