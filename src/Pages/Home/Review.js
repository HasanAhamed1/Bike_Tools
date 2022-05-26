import React from "react";

const Review = ({ re }) => {
  const { img, name, review } = re;
  return (
    <div className="card lg:max-w-lg bg-gray-100 shadow-xl items-center pt-6">
      <div class="avatar">
        <div class="w-24 rounded-full">
          <img src={img} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{review}</p>
      </div>
    </div>
  );
};

export default Review;