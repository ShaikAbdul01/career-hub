import React from "react";
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
const Card = ({ card }) => {
  //   console.log(card);
  const {
    company_logo,
    company_name,
    fulltime_or_parttime,
    id,
    job_title,
    location,
    salary,
  } = card;
  return (
    <>
      <div className="my-container mb-5 shadow-xl bg-gray-50">
        <div className="flex py-6  md:justify-between  px-2 items-center">
          <div className="flex w-full space-x-2 sm:space-x-4 items-center">
            <div className="bg-blue-100 py-12 p-2">
              <img src={company_logo} className="w-[145px] h-[50px]" alt="" />
            </div>
            <div className="pl-6 ">
              <p className="font-bold mb-2">{job_title}</p>
              <p>{company_name}</p>
              <p className="btn btn-outline btn-accent w-auto m-2">
                {fulltime_or_parttime}
              </p>
              <div className="md:flex gap-4">
                <p className="flex items-center mb-2">
                  <MapPinIcon className="h-4 w-4 mr-2 text-gray-600" />
                  <span className="font-bold">Address :</span> {location}
                </p>
                <p className="flex items-center">
                  <CurrencyDollarIcon className="h-4 w-4 mr-2 text-gray-600" />
                  <span className="font-bold">Salary :</span> {salary}
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <Link to="/">
              <button className="primaryBtn">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
