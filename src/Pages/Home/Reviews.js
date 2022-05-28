import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://calm-scrubland-52483.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="lg:m-16 lg:py-10">
      <h1 className="text-3xl font-bold pb-10">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviews.map((re) => (
          <Review key={re._id} re={re}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
