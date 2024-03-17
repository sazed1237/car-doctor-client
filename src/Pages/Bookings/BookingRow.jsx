import React from 'react';

const BookingRow = ({ booking, handleDelete, handleConfirm }) => {
    const { _id, customerName, date, email, service, img, price, status } = booking;



    return (
        < tr >
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded w-16 h-16">
                            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>${price}</td>
            <td>{date}</td>
            <th>
                {
                    status === 'confirm' ?
                        <span className='font-bold text-primary'>Confirmed</span>
                        :
                        <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr >
    );
};

export default BookingRow;