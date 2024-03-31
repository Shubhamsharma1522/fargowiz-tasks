import React, { useState } from "react";
import classes from "./ProductList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../Store/CartSlice";

const ProductsList = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.products);

  const cartItem = cartQuantity.find((cartItem) => cartItem.id === item.id);
  // console.log(cartItem, "cart item");

  const itemQuantity = cartItem ? cartItem.quantity : 0;
  // console.log("itemQuantity", itemQuantity);

  const handleQuantity = (event) => {
    const value = parseInt(event.target.value);
    // console.log(value, "handle quantity");
    setQuantity(value);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(cartActions.addToCart({ ...item, quantity }));
    // console.log(item, quantity, "handle add to cart");
    setQuantity(1);
  };

  // Elipsis method
  const addElipsis = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + "..." : str;
  };

  return (
    <>
      <div className={classes.card}>
        <article className={classes.article}>
          <div>
            <img src={item.images[0]} alt={item.title} />
          </div>
          <div>
            <p className={classes.title}>{item.title}</p>
            <p className={classes.description}>
              {addElipsis(item.description, 50)}
            </p>
            <p className={classes.price}>${item.price}</p>
          </div>
          <div className={classes.form}>
            <form onSubmit={handleAddToCart}>
              <input
                type="number"
                min={1}
                max={10}
                value={quantity}
                onChange={handleQuantity}
              />

              <button type="submit">Add to cart</button>
            </form>
          </div>
          <p className={classes.itemQuantity}>
            Added Item Quantity: {itemQuantity}
          </p>
        </article>
      </div>
    </>
  );
};

export default ProductsList;
