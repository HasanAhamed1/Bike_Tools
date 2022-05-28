import React from "react";
import { toast } from "react-toastify";

const ProductRow = ({ product, index, refetch }) => {
  const { _id, name, img } = product;
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      fetch(`https://calm-scrubland-52483.herokuapp.com/tools/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            toast.success(`Product: ${name} is deleted.`);
            refetch();
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div class="avatar">
          <div class="w-16 rounded">
            <img src={img} alt="Tailwind-CSS-Avatar-component" />
          </div>
        </div>
      </td>
      <td>{_id}</td>
      <td>{name}</td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ProductRow;
