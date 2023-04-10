import React from 'react';

const Details = () => {
    // const details=useLoaderData()
    const cartData=localStorage.getItem('cart')
    if(cartData){
        cart=JSON.parse(cartData)
    }
    console.log(cartData )
    return (
        <div className='mt-24'>
           <h1>{cart}</h1>
        </div>
    );
};

export default Details;