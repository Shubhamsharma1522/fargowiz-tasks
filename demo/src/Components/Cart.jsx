// Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '../Store/CartSlice.jsx';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.product.id} className="cart-item">
            <img src={item.product.image} alt={item.product.name} />
            <div>
              <h3>{item.product.name}</h3>
              <p>${item.product.price}</p>
              <input
                type="number"
                value={item.quantity}
                min={1}
                max={10}
                onChange={(e) =>
                  handleQuantityChange(item.product.id, parseInt(e.target.value))
                }
              />
              <button onClick={() => handleRemoveFromCart(item.product.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
