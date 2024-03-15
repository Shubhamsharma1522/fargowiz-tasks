import React, { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products.jsx";
import Pagination from "./Pagination.jsx";
import "../index.css";
import { helix } from "ldrs";

helix.register();

const ProductList = () => {
  const [cart, setCart] = useState([0]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("https://dummyjson.com/products");
        setCart(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchProducts();
  }, []);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = cart.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <l-helix size="100" speed="1.5" color="#ffc404" />
        </div>
      ) : (
        <div id="product-list">
          {currentProducts.map((item) => (
            <Products key={item.id} item={item} />
          ))}
        </div>
      )}
      {!loading ? (
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={cart.length}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : null}
    </div>
  );
};

export default ProductList;
