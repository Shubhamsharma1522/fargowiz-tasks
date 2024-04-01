import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import classes from "./Cart.module.css";
import { useNavigate } from "react-router-dom";
import { cartActions } from "../../Store/CartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.products);
  const { isAuthenticated } = useSelector((state) => state.auth);

  const totalCartPrice = cartItems.reduce((total, item) => {
    const totalPriceForItem = item.price * item.quantity;
    console.log(`Adding ${totalPriceForItem} for item: ${item.title}`);
    return total + totalPriceForItem;
  }, 0);

 

  // console.log("Total cart price:", totalCartPrice);

  const handlePlaceOrder = () => {
    dispatch(cartActions.clearCart());
    navigate("/");
    alert("Congratulations !!! your order successfully placed");
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <>
      {isAuthenticated && (
        <div className={classes.cart}>
          <h2 style={{ textAlign: "center" }}>Your Cart</h2>

          <div className={classes.items}>
            {cartItems.length > 0 ? (
              cartItems.map((item) => <CartItems key={item.id} item={item} />)
            ) : (
              <>
                <div style={{ textAlign: "center" }}>Your Cart is Empty</div>
              </>
            )}
          </div>
          {cartItems.length > 0 && (
            <div className={classes.cartEnd}>
              <p>Cart Price : ${totalCartPrice}</p>
              <button className={classes.placeOrder} onClick={handlePlaceOrder}>
                Place Order
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
