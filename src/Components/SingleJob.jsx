import React from "react";
import { MapPinIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const SingleJob = ({ job }) => {
  // console.log(job);
  const {
    company_logo,
    company_name,
    fulltime_or_parttime,
    id,
    job_title,
    location,
    salary,
  } = job;
  return (
    <>
      <div>
        <div className="card w-full bg-base-100 shadow-xl p-5">
          <div className="card-body">
            <img src={company_logo} className="w-[116px] h-[40px]" alt="" />
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>
            <button className="btn btn-outline btn-accent w-[120px]">
              {fulltime_or_parttime}
            </button>
            <div className="flex justify-around items-center text-gray-600">
              <p className="flex  items-center space-x-2">
                <MapPinIcon className="h-5 w-5 mr-2" />
                {location}
              </p>
              <p className="flex  items-center space-x-2">
                <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                {salary}
              </p>
            </div>
          </div>
          <div className="primaryBtn w-[150px]">
            
              <Link to={`details/:${id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleJob;
