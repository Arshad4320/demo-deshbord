import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationDot } from "react-icons/fa6";
import { RiArrowDropRightLine, RiArrowDropLeftLine } from "react-icons/ri";
import Slider from "react-slick/lib/slider";
import { FaCar } from "react-icons/fa";
import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import { Link } from "react-router-dom";

const carts = [
  {
    id: 1,
    img: img,
    name: "Alexander Cort",
    location: "123 Elm Street, New York",
    stodio: "Mobile & In-Studio",
  },
  {
    id: 2,
    img: img2,
    name: "Michael Smith",
    location: "789 Maple Drive, NY",
    stodio: "Mobile & In-Studio",
  },
  {
    id: 3,
    img: img3,
    name: "David Martinez",
    location: "Pine Street, San Fran",
    stodio: "Mobile & In-Studio",
  },
  {
    id: 4,
    img: img4,
    name: "Jennifer Lee",
    location: "567 Cedar Lane, Miami",
    stodio: "Mobile & In-Studio",
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
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
        },
      },
    ],
  };
  const slider = React.useRef(null);

  return (
    <div>
      <div className="relative mx-4  md:mx-7 lg:mx-4">
        <button className="" onClick={() => slider?.current?.slickNext()}>
          <RiArrowDropRightLine className=" mt-36 absolute  right-[0] lg:right-0  z-10 h-[45px] w-[45px] rounded-full bg-primary shadow-md  text-white hover:bg-[#D4E9FF] hover:text-gray-800 transition ease-in-out delay-150  " />
        </button>
        <button onClick={() => slider?.current?.slickPrev()}>
          <RiArrowDropLeftLine className="absolute mt-36 left-[0] lg:left-0 z-20 h-[45px] w-[45px] rounded-full bg-primary text-white shadow-md   hover:bg-[#D4E9FF] hover:text-gray-800 transition ease-in-out delay-150" />
        </button>
      </div>
      <Slider ref={slider} className="lg:px-16 bg-white" {...settings}>
        {carts.map((cart) => (
          <div key={cart.id}>
            <div className="card-item m-4 border border-secondary  transition ease-in-out delay-150 rounded-md mx-3">
              <div className="h-44 p-3">
                <img className="w-full h-full rounded-md" src={cart?.img} />
              </div>
              <div className="px-3">
                <h3 className="text-gray-800 text-xl mt-4 font-medium">
                  {cart?.name}
                </h3>
                <div className="flex gap-1.5 items-center my-1 text-gray-700">
                  <FaLocationDot />
                  <span className="">{cart?.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-700">
                  <FaCar />
                  <span className="">{cart?.stodio}</span>
                </div>
              </div>
              <button className="bg-primary w-full rounded-t-none mt-8 text-center text-white hover:bg-[#D4E9FF] hover:text-gray-800 px-4 py-2 rounded-md">
                See Details
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarusol;
