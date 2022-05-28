import React from "react";
import { DynamicStar } from "react-dynamic-star";

const Review = ({ re }) => {
  const { img, name, review, ratings } = re;
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
        <p>
          <DynamicStar rating={ratings} outlined width="20" height="20" />
        </p>
      </div>
    </div>
  );
};

export default Review;
