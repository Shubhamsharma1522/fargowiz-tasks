import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../Store/CartSlice";
import classes from "./CartItems.module.css";

const CartItems = ({ item }) => {
  const dispatch = useDispatch();
  const totalPrice = item.quantity * item.price;

  const handleIncreasing = () => {
    dispatch(cartActions.increaseQuantity(item.id));
    // console.log(item.id, "item id");
  };

  const handleDecreasing = () => {
    dispatch(cartActions.decreaseQuantity(item.id));
  };

  const handleRemoveCart = () => {
    dispatch(cartActions.removeToCart(item.id));
  };

  return (
    <div className={classes.main}>
      <div className={classes.title}>
        {item.title}
        <img src={item.images[0]} alt={item.title} />
      </div>
      <div className={classes.buttons}>
        <button onClick={handleDecreasing}>-</button>
        <span>{item.quantity}</span>
        <button onClick={handleIncreasing}>+</button>
      </div>
      <div className={classes.price}>${item.price}</div>
      <div className={classes.remove}>
        <h2 className={classes.totalPrice}>Product Price : ${totalPrice}</h2>
        <button onClick={handleRemoveCart}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 30 30"
            style={{ fill: "white" }}
          >
            <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
          </svg>
          Remove Item
        </button>
      </div>
    </div>
  );
};

export default CartItems;
