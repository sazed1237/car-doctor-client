import React from 'react';
import checkoutImg from '../../../assets/images/checkout/checkout.png';

const SingleBanner = () => {

    return (
        <div className="h-[300px] rounded-xl flex " style={{ backgroundImage: `url(${checkoutImg})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-1/2">
                <div className='mt-32 ml-20 text-neutral-content'>
                    <h1 className="flex items-center text-5xl font-bold">Checkout</h1>
                </div>
            </div>
            <div className='text-white mt-auto'>
                <h1 className='bg-[#FF3811] text-xl px-8 py-2 rounded-t-full'>Home/Checkout</h1>
            </div>
        </div>
    );
};

export default SingleBanner;