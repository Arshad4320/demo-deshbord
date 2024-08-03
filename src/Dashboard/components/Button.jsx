import React from "react";

const Button = ({ props, className }) => {
  return (
    <div
      className={`bg-primary   mt-8 text-center text-white hover:bg-[#D4E9FF] hover:text-gray-800 px-4 py-2 rounded-md  ${className}`}
    >
      {props}
    </div>
  );
};

export default Button;
