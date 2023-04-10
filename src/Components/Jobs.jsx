import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const jobs = useLoaderData();
  const [seeAll, setSeeAll] = useState(false);
  // console.log(jobs);
  return (
    <div>
      <div className="text-center mb-10">
        <h2 className=" text-5xl font-bold">Featured Jobs</h2>
        <p className="text-gray-600 mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="my-container grid md:grid-cols-2 gap-5">
        {jobs?.slice(0, seeAll ? jobs.length : 4).map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
      <div className="mt-24 mb-24 w-[150px] mx-auto font-medium transition duration-200 shadow-md px-4 py-2  md:py-3 text-lg border-transparent text-white bg-gradient-to-r from-[#7E90FE]/100 to-[#9873FF]/100 rounded-xl text-center">
        <button onClick={() => setSeeAll(!seeAll)?"":"hidden"} className=" ">
          See All
        </button>
      </div>
    </div>
  );
};

export default Jobs;
