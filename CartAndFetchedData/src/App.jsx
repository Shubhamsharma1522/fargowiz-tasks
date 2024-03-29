// App.js
import React from "react";
import { ProductProvider } from "./Context/ProductContext.jsx";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  return (
    <ProductProvider>
      <Cart />
      <ProductList />
    </ProductProvider>
  );
}

export default App;
