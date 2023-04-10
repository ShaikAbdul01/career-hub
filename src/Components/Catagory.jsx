import { key } from "localforage";
import React, { useEffect, useState } from "react";
import CatagoryList from "./CatagoryList";

const Catagory = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("catagory.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="">
      <div className="text-center mb-10">
        <h2 className=" text-5xl font-bold">Job Category List</h2>
        <p className="text-gray-600 mt-5">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="mb-10 my-container grid md:grid-cols-4 gap-4 ">
        {
          catagories.map(catagory=><CatagoryList key={catagory.id}
          catagory={catagory}
          ></CatagoryList>)
        }
      </div>
    </div>
  );
};

export default Catagory;
