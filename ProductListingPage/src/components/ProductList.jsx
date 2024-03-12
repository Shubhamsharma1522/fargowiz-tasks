// ProductList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard.jsx";
import Pagination from "../components/Pagination.jsx";
import Cart from "./Cart.jsx";
import "../index.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products); // Assuming the response data is an object with a 'products' array
    } catch (error) {
      console.error("Error fetching products: ", error);
    }
  };

  // Add product to cart logic here
  const addToCart = (product) => {
    if (cart < 20) {
      setCart(cart + 1);
    } else {
      alert("Cart value cannot exceed 20");
    }
  };

  // Clear cart logic here
  const clearCart = () => {
    setCart(0);
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <Cart cartValue={cart} clearCart={clearCart} />
      <div id="product-list">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} product={product} addToCart={addToCart} />
        ))}
      </div>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
    </div>
  );
};

export default ProductList;
