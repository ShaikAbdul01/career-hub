import React from "react";
import { Link } from "react-router-dom";
import Catagory from "./Catagory";
import Jobs from "./Jobs";

const Home = () => {
  return (
    <>
      <div className="mt-28 md:mt-20 md:flex justify-around items-center my-container bg-gray-200  mb-20">
        <div className="sm:pt-16 my-10 ">
          <h1 className="text-5xl font-bold mb-8 pt-5 md:pt-0">
            One Step Closer To Yourbr <br />{" "}
            <span className="animate-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]/100 bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="mb-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Link to="/">
            <button className="primaryBtn mt-8">Get Started</button>
          </Link>
        </div>
        <div className="md:w-[816px] md:h-[744px] ">
          <img src="../../public/hardy.png" className="" alt="" srcset="" />
        </div>
      </div>
       <Catagory></Catagory>
      <Jobs></Jobs>
     

    </>
  );
};

export default Home;
