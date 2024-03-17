import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    const [asc, setAsc] = useState(true)
    const searchRef = useRef(null)
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&sort=${asc ? 'asc' : 'desc'}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [asc, search])


    const handleSearch = () => {
        console.log(searchRef.current.value)
        const searchValue = searchRef.current.value
        setSearch(searchValue)

    }


    return (
        <div>
            <div className='text-center my-6 space-y-2'>
                <h4 className='text-xl font-bold text-[#FF3811]'>Service</h4>
                <h1 className='text-4xl font-bold text-[#151515]'>Our Service Area</h1>
                <p className='text-[#737373] m-auto text-sm w-1/2'>the majority have suffered alteration in some form, by injected humour, or randomised
                    words which don't look even slightly believable. </p>

                <div className="join flex justify-center">
                    <input type='text' ref={searchRef} className="input input-bordered input-sm join-item" placeholder="Search" />
                    <button onClick={handleSearch} className="btn join-item btn-sm rounded-r-xl">Search</button>
                </div>


                <button
                    className='btn btn-primary'
                    onClick={() => setAsc(!asc)}
                >{asc ? 'Price: High to Low' : 'Price: Low to High'}</button>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

            <div className='flex justify-center my-10'>
                <button className="btn  btn-outline btn-error">Appointment</button>
            </div>
        </div>
    );
};

export default Services;