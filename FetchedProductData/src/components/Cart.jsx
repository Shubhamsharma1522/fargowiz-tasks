import { FaShoppingCart } from "react-icons/fa";
import { useProduct } from "../Context/ProductContext.jsx";
import "../index.css";

const Cart = () => {
  const { cart, clearCart } = useProduct();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-main">
      <div className="cart">
        <h1>
          Product <span>Listing</span>
        </h1>
        <div className="cartContainer">
          <FaShoppingCart />
          <div className="cart-value">{cart.length}</div>
        </div>
      </div>
      <button className="cart-button" onClick={handleClearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
