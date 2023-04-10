import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  BriefcaseIcon,
  CurrencyDollarIcon,
  EnvelopeOpenIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { addToDb } from "../../public/fakedb";
const JobDetails = () => {
  const dynamic = useParams();
  const dynamicId = dynamic.detailsId;
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDetails(data.find((dt) => dt.id == dynamicId));
      });
  }, [dynamicId]);
  const handleApplyNow=(id)=>{
    addToDb(id)
  }
  const {
    id,
    contact_information,
    educational_requirements,
    experiences,
    fulltime_or_parttime,
    job_description,
    job_responsibility,
    job_title,
    location,
    remote_or_onsite,
    salary,
  } = details;
  console.log(details);
  return (
    <div className="mt-32 mb-32">
      <h2 className=" text-center md:mb-20 text-4xl font-bold mb-12 bg-blue-100 my-container p-10 rounded shadow">
        Job Details
      </h2>
      <div className=" my-container md:flex  justify-between gap-5">
        <div className="md:w-1/2 md:text-[18px]">
          <p className="mb-4">
            <span className="font-bold">Job Description :</span>{" "}
            <span className="text-gray-600">{job_description}</span>
          </p>
          <p className="mb-4">
            <span className="font-bold">Job Responsibility :</span>
            <span className="text-gray-600">{job_responsibility}</span>
          </p>
          <p className="mb-4">
            <span className="font-bold">Educational Requirements :</span>
            <span className="text-gray-600">{educational_requirements}</span>
          </p>
          <p className="mb-4">
            <span className="font-bold">Experiences :</span>{" "}
            <span className="text-gray-600">{experiences}</span>
          </p>
        </div>

        <div className="card md:w-1/2 bg-gray-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title">Job Details</h2>
            <hr />
            <p className="flex items-center">
              <CurrencyDollarIcon className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold">Salary :</span> {salary}
            </p>
            <p className="flex items-center">
              <BriefcaseIcon className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold">Job Title :</span> {job_title}
            </p>
            <h2 className="card-title mt-6">Contact Information</h2>
            <hr />
            <p className="flex items-center">
              <PhoneIcon className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold">Phone :</span>{" "}
              {contact_information?.phone}
            </p>
            <p className="flex items-center">
              <EnvelopeOpenIcon className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold">Email :</span>{" "}
              {contact_information?.email}
            </p>
            <p className="flex items-center">
              <MapPinIcon className="h-6 w-6 mr-2 text-blue-400" />
              <span className="font-bold">Address :</span> {location}
            </p>
            <div className="card-actions justify-center mt-5">
              <button onClick={()=>handleApplyNow(id)} className="primaryBtn w-full">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
