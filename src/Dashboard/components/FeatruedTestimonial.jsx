import React from "react";
import Heading from "./Heading";
import img from "../../assets/img2.png";
import img2 from "../../assets/img3.png";
import { FaLocationDot } from "react-icons/fa6";
const carts = [
  {
    id: 1,
    img: img,
    name: "Healing Bodywork by Cort",
    location: "123 Elm Street, New York",
    description:
      "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...Read More",
  },
  {
    id: 2,
    img: img2,
    name: "Healing Bodywork by Cort",
    location: "123 Elm Street, New York",
    description:
      "Cort’s healing bodywork massage was absolutely transformative. Their intuitive touch and deep understanding of...Read More",
  },
];
const FeatruedTestimonial = () => {
  return (
    <div>
      <Heading props={"Testomonial"} />
      <div className="bg-white flex flex-col gap-4  rounded-md p-4 mt-3">
        {carts.map((cart) => (
          <div
            className="flex flex-col sm:flex-row gap-4  border p-3 rounded-md"
            key={cart.id}
          >
            <div className="w-full h-44 ">
              <img className="w-full h-full rounded-md" src={cart.img} alt="" />
            </div>
            <div>
              <div className="flex gap-2 text-gray-700 items-center">
                <FaLocationDot />
                <p className="">{cart.location}</p>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-1">
                {cart.name}
              </p>
              <p className="text-justify mt-1 text-gray-700">
                {cart.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatruedTestimonial;
