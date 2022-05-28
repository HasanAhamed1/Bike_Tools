import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading";

const ManageAllOrders = () => {
  const [user] = useAuthState(auth);
  const [button, setButton] = useState();
  const {
    data: allorders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://calm-scrubland-52483.herokuapp.com/booking", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  // const handlePayment = (id) => {

  //   fetch(`https://calm-scrubland-52483.herokuapp.com/bookings/${id}`)
  // .then(res=>res.json())
  // .then(data =>{
  //     setButton('paid');
  // })

  //}

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Tool's Name</th>
            <th>Tool's Quantity</th>
            <th>Payment Info</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((allorder, index) => (
            <tr key={allorder._id}>
              <th>{index + 1}</th>
              <td>{allorder.tool}</td>
              <td>{allorder.quantity}</td>
              <td>
                {allorder.paid && <button className="btn btn-xs">paid</button>}
                {!allorder.paid && (
                  <button className="btn btn-xs">Unpaid</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAllOrders;
