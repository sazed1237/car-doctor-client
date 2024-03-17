import React from 'react';
import timetable from '../../../assets/icons/001-timetable.svg';
import phone from '../../../assets/icons/Group 34.svg';
import location from '../../../assets/icons/Group 35.svg';

const Contact = () => {
    return (
        <div className='grid grid-cols-3 rounded-md gap-5 h-56 bg-black my-20' >
            <div className='flex m-auto'>
                <img src={timetable} alt="" />
                <div className='ml-4'>
                    <p className='text-sm text-white font-medium'>We are open monday-friday</p>
                    <h3 className='text-2xl font-bold text-white' >7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className='flex m-auto'>
                <img src={phone} alt="" />
                <div className='ml-4'>
                    <p className='text-sm text-white font-medium'>Have a question?</p>
                    <h3 className='text-2xl font-bold text-white' >+2546 251 2658</h3>
                </div>
            </div>
            <div className='flex m-auto'>
                <img src={location} alt="" />
                <div className='ml-4'>
                    <p className='text-sm text-white font-medium'>Need a repair? our address</p>
                    <h3 className='text-2xl font-bold text-white' >Liza Street, New York</h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;