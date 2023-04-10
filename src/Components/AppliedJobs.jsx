import React from 'react';
import { getCart } from '../../public/fakedb';

const AppliedJobs = () => {
    const cartData=getCart('cart')
    console.log(cartData);
    return (
        <div className='mt-32'>
            cart
        </div>
    );
};

export default AppliedJobs;