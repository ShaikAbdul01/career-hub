import React, { useState } from "react";
import { getCart } from "../../public/fakedb";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const AppliedJobs = () => {
  const cart = useLoaderData();
  console.log(cart);
  const storedCart = getCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = cart.find((pd) => pd.id == id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  console.log(savedCart);

  return <div className="mt-32">
  {
    savedCart.map(data=><Card key={data.id} card={data}></Card>)
  }
  </div>;
};

export default AppliedJobs;
