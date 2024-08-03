import React from "react";

const Heading = ({ props, className }) => {
  return (
    <p className={`font-medium  text-2xl text-gray-800 ${className}`}>
      {props}
    </p>
  );
};

export default Heading;
