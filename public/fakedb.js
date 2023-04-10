// use local storage to manage cart data
const addToDb = (id) => {
  let cart = getCart();
  // add quantity
  const quantity = cart[id];
  if (!quantity) {
    cart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    cart[id] = newQuantity;
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

const removeFromDb = (id) => {
  const cart = getCart();
  if (id in cart) {
    delete cart[id];
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const getCart = () => {
  let cart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const deletecart = () => {
  localStorage.removeItem("cart");
};

export { addToDb, removeFromDb, getCart, deletecart };
