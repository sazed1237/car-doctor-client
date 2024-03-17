import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleBanner from '../Shared/SingleBanner/SingleBanner';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = () => {

    const service = useLoaderData();
    const { _id, title, img, price } = service
    const { user } = useContext(AuthContext)

    const handleOrderConfirm = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form?.phone.value;
        const email = form?.email.value;
        const bookingInfo = {
            customerName: name,
            date,
            phone,
            img,
            email,
            service_id: _id,
            service: title,
            price: price

        }
        console.log(bookingInfo)

        fetch('https://car-doctor-server-dun-sigma.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Your Order Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <SingleBanner service={service} ></SingleBanner>

            <div className=" w-full my-14 shadow-2xl  bg-base-200">
                <form onSubmit={handleOrderConfirm} className="card-body w-3/4 m-auto ">

                    <div className=' my-7 grid  grid-cols-1 md:grid-cols-2 gap-5 gap-x-10'>
                        <div className="form-control">
                            <input type="text" name='name' defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <input type="date" name='date' className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <input type="text" name='email' defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="form-control">
                        <textarea name='massage' placeholder="Your Massage" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn text-white bg-[#FF3811]">Order Confirm</button>
                    </div>
                </form>
            </div>

        </div>

    );
};

export default Checkout;