import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useToolDetail from "../Hooks/useToolDetail";

const ToolDetail = () => {
  const { toolId } = useParams();
  const [tool] = useToolDetail(toolId);
  const [user, loading, error] = useAuthState(auth);

  const handleBooking = event => {
    event.preventDefault();
    console.log(toolId, tool.name, tool.price);
    const booking = {
        Id: toolId,
        tool: tool.name,
        availableQuantity: tool.availableQuantity,
        minOrderQuantity: tool.minOrderQuantity,
        quantity: event.target.quantity.value,
        price: tool.price,
      customer: user.email,
      userName: user.displayName,
      userPhone: event.target.phone.value
    }

    fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data){
            toast('Successfully Booked');
        }
        else{
            toast.error('Sorry')
        }
        
    })
  };
  return (
    //     <div>
    //     <input type="checkbox" id="booking-modal" className="modal-toggle" />
    //     <div className="modal modal-bottom sm:modal-middle">
    //       <div className="modal-box">
    //       <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    //         <h3 className="font-bold text-lg">
    //           Booking For: {tool.name}
    //         </h3>
    //         <img
    //             src={tool.img}
    //             alt="Shoes"
    //           />
    //         <form onSubmit={handleBooking} className="grid grid-cols-1 gap-3 justify-center mt-2">
    //         <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
    //         <input type="email" name="email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
    //         <input type="tel" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
    //         <input type="submit" value="Submit" className="btn btn-secondary text-white w-full max-w-xs" />
    //         </form>

    //       </div>
    //     </div>
    //   </div>

    <div className="flex">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={tool.img} alt="Shoes" />
        </figure>
        <div className="card-body">
        <h1>{tool.name}</h1>
        <p>{tool.shortDescription}</p>
        <p>{tool.price}</p>
        <p>{tool.availableQuantity}</p>
        <p>{tool.minOrderQuantity}</p>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleBooking}
          className="grid grid-cols-1 gap-3 justify-center mt-2"
        >
            <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="name"
            disabled
            value={user?.displayName || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            disabled
            value={user?.email || ""}
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-secondary text-white w-full max-w-xs"
          />
        </form>
      </div>
    </div>
  );
};

export default ToolDetail;