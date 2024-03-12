// Cart.js
import { FaShoppingCart } from "react-icons/fa";
import React from "react";
import "../index.css";

const Cart = ({ cartValue, clearCart }) => {
  return (
    <div className="cart-main">
      <div className="cart">
        <h1>
          Product <span>Listing</span>
        </h1>
        <div className="cartContainer">
          <FaShoppingCart />
          <div className="cart-value">{cartValue}</div>
        </div>
      </div>
      <button className="cart-button" onClick={clearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
