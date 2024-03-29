// App.js
import React, { useState, useEffect } from "react";
import { ProductProvider } from "./Context/ProductContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [clearAlert, setClearAlert] = useState(false);

  useEffect(() => {
    let alertTimer;

    if (showAlert) {
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
      clearTimer = setTimeout(() => {
        setClearAlert(false);
      }, 3000);
    }

    return () => {
      clearTimeout(clearTimer);
    };
  }, [clearAlert]);

  return (
    <ProductProvider>
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
