import React from "react";
import classes from "./Header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Store/AuthSlice";
import { cartActions } from "../../Store/CartSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.products);

  // console.log(totalQuantity, "total quantity");

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const cartProducts = totalQuantity.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    dispatch(authActions.logout());
    dispatch(cartActions.clearCart());
    navigate("/login");
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const toggleCartHandler = () => {
    {
      isAuthenticated && navigate("/cart");
    }
  };

  const handleTitleClick = () => {
    if (isAuthenticated) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes.start}>
        <h2 onClick={handleTitleClick}>
          Redux <span>Cart</span>
        </h2>

        {isAuthenticated && (
          <button onClick={toggleCartHandler}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            {cartProducts}
          </button>
        )}
      </div>
      {isAuthenticated && <div style={{ fontSize: "15px" }}>{user.email}</div>}
      {!isAuthenticated ? (
        <div className={classes.end}>
          <Link to="/login">
            <button className={classes.login}>Login</button>
          </Link>
          <Link to="/register">
            <button className={classes.register}>Register</button>
          </Link>
        </div>
      ) : (
        <div className={classes.clearButtons}>
          <button onClick={handleClearCart} className={classes.clear}>
            Clear
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;
