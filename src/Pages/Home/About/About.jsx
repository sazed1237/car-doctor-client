import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-7 top-1/2 rounded-lg border-[10px] border-white shadow-2xl" />
                </div>

                <div className='lg:w-1/2'>
                    <h3 className='text-xl font-bold text-[#FF3811] mb-5'>About Us</h3>
                    <h1 className="text-4xl text-[#151515] w-1/2 font-bold">We are qualified & of experience in this field</h1>

                    <p className="py-6 w-3/4">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form, by injected humour,
                        or randomised words which don't look even slightly believable. </p>

                    <p className="pb-6 w-3/4">the majority have suffered alteration in some form, by injected humour, or randomised
                        words which don't look even slightly believable. </p>
                    <button className="btn bg-[#FF3811] text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;