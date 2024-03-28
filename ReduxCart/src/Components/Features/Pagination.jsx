import React from "react";
import "../../index.css";
import { useSelector } from "react-redux";

const Pagination = ({
  productsPerPage,
  totalProducts,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];
  const { isAuthenticate } = useSelector((state) => state.auth);

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      {isAuthenticate && (
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                className={`${currentPage === number ? "active" : ""}`}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Pagination;
