import React from "react";
import { useNavigate } from "react-router-dom";

const Tool = ({ tool }) => {
  const {
    _id,
    name,
    img,
    shortDescription,
    minOrderQuantity,
    availableQuantity,
    price,
  } = tool;

  const navigate = useNavigate();
  const navigateToToolDetail = (id) => {
    navigate(`/tool/${id}`);
  };
  return (
    <div className="card lg:max-w-lg bg-gray-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{shortDescription}</p>
        <p>Minimum Quantity: {minOrderQuantity}</p>
        <p>Available Quantity: {availableQuantity}</p>
        <p>Price: {price}</p>
        <button onClick={() => navigateToToolDetail(_id)} className="btn">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Tool;
