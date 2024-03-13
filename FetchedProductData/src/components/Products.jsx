import React from "react";
import { useProduct } from "../Context/ProductContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import { Button } from "@mui/material";
import styled from "@emotion/styled";

const AddToCart = styled(Button)`
  text-transform: none;
  margin:20px;
  color: #ffc404;
  height: 40px;
  width: 10rem;
  border-radius: 2px;
`;

//add ... with large words
export const addElipsis = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

function Products({ item }) {
  const { addToCart } = useProduct();

  const handleAddToCart = () => {
    addToCart({ ...item });
  };

  return (
    <div className="product-card">
      <article>
        <img src={item.images[0]} alt={item.title} />
        <h3>{item.title}</h3>
        <p className="product-card-description">
          {addElipsis(item.description, 50)}
        </p>
        <p className="product-card-price">
          Price: {currencyFormatter.format(item.price)}
        </p>
        {/* <button className="product-card-action" onClick={handleAddToCart}>
          Add to Cart
        </button> */}

        <AddToCart variant="text" onClick={handleAddToCart}>
          Add To Cart
        </AddToCart>
      </article>
    </div>
  );
}

export default Products;
