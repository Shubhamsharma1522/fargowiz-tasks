import { useState, useEffect } from "react";
import { ProductProvider } from "./Context/ProductContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

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

  const addToCart = (item) => {
    // Check if the total items in the cart exceed 20
    if (cart.length >= 20) {
      setShowAlert(true);
      return;
    }

    // add in cart with quantity 1 if new item
    setCart((prev) => [{ id: Date.now(), ...item, quantity: 1 }, ...prev]);
  };

  const clearCart = () => {
    setClearAlert(true);
    setCart([]);
  };

  return (
    <ProductProvider value={{ addToCart, cart, clearCart }}>
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
