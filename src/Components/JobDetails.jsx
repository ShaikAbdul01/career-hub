import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const JobDetails = () => {
  const dynamic = useParams();
  const dynamicId = dynamic.detailsId;
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setDetails(data.find((dt) => dt.id == dynamicId));
      });
  }, [dynamicId]);
  console.log(details);
  return (
    <div className="mt-48">
      <p>{details.length}</p>
    </div>
  );
};

export default JobDetails;
