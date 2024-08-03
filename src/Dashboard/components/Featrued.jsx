import React from "react";
import Heading from "./Heading";
import CardCarusol from "./CardCarusol";

const Featrued = () => {
  return (
    <div>
      <Heading className={"mx-8"} props={"Featured Therapist"} />
      {/* <div className=" bg-white p-6  mx-8"></div> */}
      <CardCarusol />
    </div>
  );
};

export default Featrued;
