import React, { useEffect, useState } from "react";
import axios from "axios";
import classes from "./Products.module.css";
import ProductsList from "./ProductsList";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Products = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    loadedData: [],
    currentPage: 1,
    productPerPage: 10,
  });
  //   console.log(loadedData, "loaded data");

  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://dummyjson.com/products");
      setState((prevState) => ({ ...prevState, loadedData: data.products }));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
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
