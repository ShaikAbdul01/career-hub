import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mt-20 md:flex justify-around items-center my-container bg-gradient-to-r from-[#7E90FE]/0 to-[#9873FF]/100 mb-10">
      <div className="sm:pt-16">
        <h1 className="text-5xl font-bold">
          One Step Closer To Yourbr <br /> <span className="animate-text bg-gradient-to-r from-[#7E90FE] to-[#9873FF]/100 bg-clip-text text-transparent font-black">Dream Job</span>
        </h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish.
        </p>
        <Link to="/">
          <button className="btn-primary">Get Started</button>
        </Link>
      </div>
      <img src="../../public/hardy.png" className="w-[816px] h-[744px] " alt="" srcset="" />
    </div>
  );
};

export default Home;
