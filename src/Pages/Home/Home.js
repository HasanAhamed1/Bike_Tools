import React from "react";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Highlight from "./Highlight";
import Items from "./ItemCollection/Items";
import Reviews from "./Reviews";
import Tools from "./Tools";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Highlight></Highlight>
      <Tools></Tools>
      <Items></Items>
      <Reviews></Reviews>
      <BusinessSummary></BusinessSummary>
    </div>
  );
};

export default Home;
