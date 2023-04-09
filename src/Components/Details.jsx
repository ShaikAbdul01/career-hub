import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details=useLoaderData()
    // console.log(details)
    return (
        <div className='mt-24'>
           <h1>details</h1>
        </div>
    );
};

export default Details;