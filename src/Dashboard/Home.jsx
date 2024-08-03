import React from "react";

import MessageComponent from "./components/MessageComponent";
import PopulerCities from "./components/PopulerCities";
import FeatruedTestimonial from "./components/FeatruedTestimonial";
import Featrued from "./components/Featrued";

const Home = () => {
  return (
    <div className="m-8">
      <MessageComponent />
      <Featrued />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 my-6 ">
        <FeatruedTestimonial />
        <PopulerCities />
      </div>
    </div>
  );
};

export default Home;
