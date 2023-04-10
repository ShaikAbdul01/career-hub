import { getCart } from "../../public/fakedb";
const loaderData = async () => {
  const loadedData = await fetch("data.json");
  const products = await loadedData.json();
  const storedCart = getCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  return savedCart;
};

export default loaderData;
