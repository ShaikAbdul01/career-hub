import React, { useState } from "react";
import { getCart } from "../../public/fakedb";
import { useLoaderData, useParams } from "react-router-dom";

const AppliedJobs = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  /* let cart = [];
  const saveCart = getCart("cart");
  for (const id in saveCart) {
    const foundData = details.find((data) => data.id === id);
    if (foundData) {
      cart.push(foundData);
    }
    // console.log(details.length);
  } */
  return <div className="mt-32">cart{savedCart.company_name}</div>;
};

export default AppliedJobs;
