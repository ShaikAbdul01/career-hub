import React from 'react';

const CatagoryList = ({catagory}) => {
    return (
        <div className='bg-gray-100 p-6 rounded'>
            <img src={catagory.icon} className='w-[40px] h-[40px] mb-4' alt="" />
            <p className='text-xl font-bold mb-2'>{catagory.title}</p>
            <p className='text-gray-600'>{catagory.available}</p>
        </div>
    );
};

export default CatagoryList;