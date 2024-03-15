import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { useProduct } from "../Context/ProductContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const AddToCart = styled(Button)`
  text-transform: none;
  margin: 20px;
  color: #ffc404;
  height: 40px;
  width: 10rem;
  border-radius: 2px;
`;

export const addElipsis = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

function Products({ item }) {
  const [quantity, setQuantity] = useState(1); 
  const { addByQuantity } = useProduct();


  //for submitting the form and adding the item to the cart
  const handleAddToCart = (event) => {
    event.preventDefault();
    console.log("item in handle addToCart function", item);
    addByQuantity(item, quantity); // Add item with specified quantity to cart
  };


  //or updating the quantity when the user changes the input field
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value); 
    console.log("item in handle addToCart function", value);
    setQuantity(value); // Update quantity state
  };

  return (
    <div className="product-card">
      <article>
        <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p className="product-card-description">
          {addElipsis(item.description, 30)}
        </p>
        <p className="product-card-price">
          Price: {currencyFormatter.format(item.price)}
        </p>
        <form onSubmit={handleAddToCart}>
          {/**Users can adjust the quantity using the input field */}
          <input
            className="product-card-quantity"
            type="number"
            min={1}
            max={10}
            value={quantity} // input value
            onChange={handleQuantityChange} // Handle quantity change
          />
          <AddToCart variant="text" type="submit">
            <MdAddCircle /> Add To Cart
          </AddToCart>
        </form>
      </article>
    </div>
  );
}

export default Products;
