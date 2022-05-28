import React from "react";
import bg from "../../Background/bg.png";
import {
  FlagIcon,
  ArchiveIcon,
  UserGroupIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";

const BusinessSummary = () => {
  return (
    <div className="my-16" style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <div className="text-center mb-5">
          <h1 className="text-5xl font-bold mb-5">Million Business Trust Us</h1>
          <h3 className="text-2xl">Try to understand users expectation</h3>
        </div>
        <div className="flex items-center justify-center gap-16 text-center m-14 font-bold text-3xl">
          <div className="grid justify-items-center mr-8">
            <FlagIcon className="h-14 w-14"></FlagIcon>
            <h2>72</h2>
            <p>Countries</p>
          </div>
          <div className="grid justify-items-center mr-8">
            <ArchiveIcon className="h-14 w-14"></ArchiveIcon>
            <h2>200+</h2>
            <p>Complete Projects</p>
          </div>
          <div className="grid justify-items-center mr-8">
            <UserGroupIcon className="h-14 w-14"></UserGroupIcon>
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
          <div className="grid justify-items-center mr-8">
            <ThumbUpIcon className="h-14 w-14"></ThumbUpIcon>
            <h2>300+</h2>
            <p>FeedBacks</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-16 shadow-lg m-10 p-10">
          <div>
            <h1 className="text-3xl">Have any questions about us?</h1>
            <p className="text-xl">dont hasitate to contact us</p>
          </div>
          <div className="flex gap-5">
            <button className="btn btn-wide">Request For Quote</button>
            <button className="btn">Contact US</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
