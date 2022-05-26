import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://calm-scrubland-52483.herokuapp.com/bookings?customer=${user.email}`, {
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    navigate('/')
                }
               return res.json()
            })
            .then(data => {

                setOrders(data);
            })
        }
    }, [user]);

    

    
    return (
        <div>
            <h2>My orders: {orders.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Action</th>
        <th>Cancel</th>
      </tr>
    </thead>
    <tbody>
      {
          orders.map((o, index) => 
          <tr key={o._id}>
            <th>{index + 1}</th>
            <td>{o.tool}</td>
            <td>{o.quantity}</td>
            <td>
              {(o.price && !o.paid) && <Link to={`/dashboard/payment/${o._id}`}><button className='btn btn-xs'>Pay</button></Link>}
              {(o.price && o.paid) && <div>
                <p><span className='text-success'>Paid</span></p>
                <p><span className='text-success'>{o.transectionId}</span></p>
                </div>}
            </td>
            <td><button className='btn btn-xs btn-error'>X</button></td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders