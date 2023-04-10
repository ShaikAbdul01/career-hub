import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
const JobDetails = () => {
  const dynamic = useParams();
  // console.log(dynamic)
  const dynamicId = dynamic.detailsId;
  // console.log(dynamic,dynamicId)
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setDetails(data.find((dt) => dt.id == dynamicId));
      });
  }, [dynamicId]);
  const {
    company_name,
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
    <div className="mt-32">
      <h2 className="text-3xl font-bold text-center mb-8 md:mb-20">Job Details</h2>
    <div className=" my-container md:flex  justify-between gap-5">
      <div className="md:w-1/2">
        <p className="mb-4">
          <span className="font-bold">Job Description :</span> {job_description}
        </p>
        <p className="mb-4">
          <span className="font-bold">Job Responsibility :</span>
          {job_responsibility}
        </p>
        <p className="mb-4">
          <span className="font-bold">Educational Requirements :</span>
          {educational_requirements}
        </p>
        <p className="mb-4">
          <span className="font-bold">Experiences :</span> {experiences}
        </p>
      </div>

      <div className="card md:w-1/2 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Job Details</h2>
          <hr />
          <p>Salary : {salary}</p>
          <p>Job Title : {job_title}</p>
          <h2 className="card-title">Contact Information</h2>
          <hr />
          <p>Phone : {contact_information
?.phone}</p>
          <p>Email : {contact_information
?.email}</p>
          <p>Address : {location}</p>
          <div className="card-actions justify-center">
            <button className="primaryBtn">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default JobDetails;
