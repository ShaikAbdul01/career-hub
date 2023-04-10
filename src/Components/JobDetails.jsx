import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const detailsData=useLoaderData()
    console.log(detailsData)
    return (
        <div>
            
        </div>
    );
};

export default JobDetails;