import React from "react";

import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Slider from "react-slick/lib/slider";

// import img from "../../assets/image/carusol/hosue.png";
// import img2 from "../../assets/image/carusol/apartment.png";
// import img3 from "../../assets/image/carusol/office.png";
// import img4 from "../../assets/image/carusol/vila.png";
import { Link } from "react-router-dom";

const carts = [
  {
    id: 1,
    // img: img,
    name: "House",
  },
  {
    id: 2,
    // img: img2,
    name: "Apartment",
  },
  {
    id: 3,
    // img: img3,
    name: "Office",
  },
  {
    id: 4,
    // img: img4,
    name: "Villa",
  },
];

const CardCarusol = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          //   centerMode: true,
          //   centerPadding: "0 20px",
          //   centerMargin: " 20px",
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          //   centerMode: true,
          //   centerPadding: "0 20px",
          //   centerMargin: " 20px",
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          //   centerMode: true,
          //   centerPadding: "0 20px",
          //   centerMargin: " 20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          //   centerMode: true,
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <>
      <div className="relative mx-4  md:mx-7 lg:mx-4">
        <button className="" onClick={() => slider?.current?.slickNext()}>
          <RiArrowDropRightLine className=" mt-24 absolute  right-[0] lg:right-0  z-10 h-[45px] w-[45px] rounded-full bg-gray-50 shadow-md  text-gray-700 hover:bg-secondary hover:text-white transition ease-in-out delay-150  " />
        </button>
        <button onClick={() => slider?.current?.slickPrev()}>
          <RiArrowDropLeftLine className="absolute mt-24 left-[0] lg:left-0 z-20 h-[45px] w-[45px] rounded-full bg-gray-50 shadow-md  text-gray-700 hover:bg-secondary hover:text-white transition ease-in-out delay-150" />
        </button>
      </div>
      <Slider ref={slider} className="px-18" {...settings}>
        {carts.map((cart) => (
          <Link to={`/properties/city/${cart.id}`}>
            <div
              key={cart.id}
              className="  p-12 hover:bg-white hover:shadow-2xl transition ease-in-out delay-150 rounded-md "
            >
              <div className="flex justify-center items-center ">
                <img className=" " src={cart.img} />
              </div>
              <h3 className="text-center text-gray-700 text-lg mt-4 font-semibold">
                {cart.name}
              </h3>
            </div>
          </Link>
        ))}
      </Slider>
    </>
  );
};

export default CardCarusol;
