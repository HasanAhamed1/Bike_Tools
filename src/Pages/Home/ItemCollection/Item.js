import React from "react";

const Item = ({ item }) => {
  const { img, price } = item;
  return (
    <div className="flex px-10 gap-5">
      <figure className="bg-gray-100">
        <img src={img} alt="Movie" />
      </figure>
      <div className="pt-10">
        <p>Price: {price}</p>
        <div className="rating rating-sm">
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-6"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
        <div className="">
          <button className="btn btn-xs">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;