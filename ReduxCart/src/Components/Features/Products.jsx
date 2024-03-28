import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";

const Products = () => {
  const [state, setState] = useState({
    loadedData: [],
    currentPage: 1,
    productPerPage: 10,
  });
  //   console.log(loadedData, "loaded data");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setState((prevState) => ({ ...prevState, loadedData: data.products }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const indexOfLastProduct = state.currentPage * state.productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - state.productPerPage;
  const currentProducts = state.loadedData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const setCurrentPage = (pageNumber) => {
    setState((prevState) => ({ ...prevState, currentPage: pageNumber }));
  };

  return (
    <>
      <div className={classes.productList}>
        {currentProducts.map((product) => (
          <ProductsList key={product.id} item={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={state.productPerPage}
        totalProducts={state.loadedData.length}
        currentPage={state.currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
