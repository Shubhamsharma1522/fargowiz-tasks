import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Login from "./Auth/Login.jsx";
import Register from "./Auth/Register.jsx";
import Products from "./Components/Features/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
