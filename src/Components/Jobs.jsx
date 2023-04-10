import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleJob from "./SingleJob";

const Jobs = () => {
  const jobs = useLoaderData();
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
        {jobs?.map((job) => (
          <SingleJob key={job.id} job={job}></SingleJob>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
