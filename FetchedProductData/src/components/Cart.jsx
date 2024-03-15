import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useProduct } from "../Context/ProductContext.jsx";
import "../index.css";
import { getCartItemsTotal } from "../util/formatting.js";

const Cart = () => {
  const { cart, clearCart } = useProduct();
  console.log("cart adding", cart);

  const handleClearCart = () => {
    clearCart();
  };

  console.log("Cart ", cart);

  //using total quantity method
  const cartLength = getCartItemsTotal(cart);

  console.log("cartLength", cartLength);

  return (
    <div className="cart-main">
      <div className="cart">
        <h1>
          Product <span>Listing</span>
        </h1>
        <div className="cartContainer">
          <FaShoppingCart />
          <div className="cart-value">{cartLength}</div>
        </div>
      </div>
      <button className="cart-button" onClick={handleClearCart}>
        <FaTrash /> Clear Cart
      </button>
    </div>
  );
};

export default Cart;
