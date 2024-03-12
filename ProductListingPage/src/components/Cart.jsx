// Cart.js
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import "../index.css";


const Cart = ({ cartValue, clearCart }) => {
  return (
    <div className="cart">
      <h1>Product <span>Listing</span> </h1>
      <div className='cartContainer'>
      <p><FaShoppingCart /> Cart Value:{cartValue}</p>
      <button onClick={clearCart}>Clear Cart</button>
      </div>
     
    </div>
  );
};

export default Cart;
