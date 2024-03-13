// // // CartContext.js
// // import React, { createContext, useState, useContext } from "react";

// // // Create the context
// // const CartContext = createContext();

// // // Custom hook to use the cart context
// // export const useCart = () => useContext(CartContext);

// // // Provider component
// // export const CartProvider = ({ children }) => {
// //   const [cart, setCart] = useState([]);

// //   // Function to add a product to the cart
// //   const addToCart = (productId, quantity) => {
// //     // Calculate the total quantity already in the cart
// //     const totalCartQuantity = cart.reduce(
// //       (acc, item) => acc + item.quantity,
// //       0
// //     );

// //     // Check if adding the selected quantity will exceed the limit of 20 items in the cart
// //     if (totalCartQuantity + quantity > 20) {
// //       alert("Cart value cannot exceed 20");
// //       return;
// //     }

// //     // Find the index of the product in the cart
// //     const productIndex = cart.findIndex((item) => item.productId === productId);

// //     // If the product is already in the cart, update its quantity
// //     if (productIndex !== -1) {
// //       const updatedCart = [...cart];
// //       updatedCart[productIndex].quantity += quantity;
// //       setCart(updatedCart);
// //     } else {
// //       // Otherwise, add the product to the cart
// //       setCart([...cart, { productId, quantity }]);
// //     }
// //   };

// //   // Function to clear the cart
// //   const clearCart = () => {
// //     setCart([]);
// //   };

// //   return (
// //     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };



// import React, { createContext, useState, useContext } from "react";

// // Create the context
// const CartContext = createContext();

// // Custom hook to use the cart context
// export const useCart = () => useContext(CartContext);

// // Provider component
// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Function to add a product to the cart
//   const addToCart = (productId, quantity) => {
//     // Calculate the total quantity already in the cart
//     const totalCartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

//     // Check if adding the selected quantity will exceed the limit of 20 items in the cart
//     if (totalCartQuantity + quantity > 20) {
//       alert("Cart value cannot exceed 20");
//       return;
//     }

//     // Find the index of the product in the cart
//     const productIndex = cart.findIndex((item) => item.productId === productId);

//     // If the product is already in the cart, update its quantity
//     if (productIndex !== -1) {
//       const updatedCart = [...cart];
//       updatedCart[productIndex].quantity += quantity;
//       setCart(updatedCart);
//     } else {
//       // Otherwise, add the product to the cart
//       setCart([...cart, { productId, quantity }]);
//     }
//   };

//   // Function to clear the cart
//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };