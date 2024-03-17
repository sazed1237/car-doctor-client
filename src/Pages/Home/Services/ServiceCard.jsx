import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service

    return (
        <div className="card w-96 bg-base-100 border-2 border-[#E8E8E8]">
            <figure className="px-5  pt-5">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="text-2xl font-bold text-[#444]">{title}</h2>

                <div className="card-actions flex  ">
                    <p className='text-[#FF3811] text-xl font-semibold'>Price : ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-[#FF3811]  text-xl"> <FaArrowRight></FaArrowRight> </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;