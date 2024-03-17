import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { data } from 'autoprefixer';
import BookingRow from './BookingRow';
import SingleBanner from '../Shared/SingleBanner/SingleBanner';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()

    const url = `https://car-doctor-server-dun-sigma.vercel.app/bookings?email=${user?.email}`;
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(!data.error){
                    setBookings(data)
                }
                else{
                    // best way is log out then navigate to home
                    navigate('/');
                }
            })
    }, [url, navigate])

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://car-doctor-server-dun-sigma.vercel.app/bookings/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Order has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(booking => booking._id !== id)
                            setBookings(remaining);
                        }
                    })


            }
        });
    }

    const handleConfirm = id => {
        console.log(id)
        fetch(`https://car-doctor-server-dun-sigma.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: confirm })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Order has been Updated.",
                        icon: "success"
                    });
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)
                }
            })
    }


    return (
        <div>
            <div>
                <SingleBanner></SingleBanner>
            </div>
            <h2 className='text-3xl text-center font-bold my-7'>Your Bookings: {bookings.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Services</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id}
                                booking={booking}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                            ></BookingRow>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;