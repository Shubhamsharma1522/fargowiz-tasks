// ProductCard.js
import "../index.css";
import React from "react";
import { currencyFormatter } from "../util/formatting";

//add ... with large words
export const addElipsis = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + "..." : str;
};

const ProductCard = ({ product, addToCart }) => {
  const { images, title, description, price } = product;

  return (
    <div className="product-card">
      <article>
        <img src={images[0]} alt={title} />
        <h3>{title}</h3>
        <p className="product-card-description">
          {addElipsis(description, 50)}
        </p>
        <p className="product-card-price">
          Price: {currencyFormatter.format(price)}
        </p>
        <button
          className="product-card-action"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </article>
    </div>
  );
};

export default ProductCard;
