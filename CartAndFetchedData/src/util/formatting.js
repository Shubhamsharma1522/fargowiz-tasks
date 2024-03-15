export const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});


//total quantity 
export const getCartItemsTotal = (cart) =>
  cart.reduce((curr, item) => {
    console.log("Array Reduce", item, curr);
    return item.quantity + curr;
  }, 0);
