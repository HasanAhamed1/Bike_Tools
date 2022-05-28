import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const OrderRow = ({ index, order, setOrders, orders }) => {
  const { _id, tool, quantity, price, paid, transactionId } = order;
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://calm-scrubland-52483.herokuapp.com/bookings/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            toast.success(`Order: ${tool} is deleted.`);
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{tool}</td>
      <td>{quantity}</td>
      <td>
        {price && !paid && (
          <Link to={`/dashboard/payment/${_id}`}>
            <button className="btn btn-xs">Pay</button>
          </Link>
        )}
        {price && paid && (
          <div>
            <p>
              <span className="text-success">Paid</span>
            </p>
            <p>
              <span className="text-success">{transactionId}</span>
            </p>
          </div>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          disabled={paid}
          className="btn btn-xs btn-error"
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
