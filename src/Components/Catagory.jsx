import React, { useEffect, useState } from "react";

const Catagory = () => {
  const [catagorys, setCatagorys] = useState([]);
  useEffect(() => {
    fetch("catagory.json")
      .then((res) => res.json())
      .then((data) => setCatagorys(data));
  }, []);
  return (
    <div className="">
      <div className="text-center mb-10">
        <h2 className=" text-5xl font-bold">Job Category List</h2>
        <p className="text-gray-600 mt-5">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
      </div>
      <div className="mb-10">
        {catagorys.map((catagory) => (
          <p>{catagory.title}</p>
        ))}
      </div>
    </div>
  );
};

export default Catagory;
