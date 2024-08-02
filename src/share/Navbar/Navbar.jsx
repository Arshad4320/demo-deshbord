import { Link } from "react-router-dom";
import React, { useState } from "react";
// import logo from "../../assets/images/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

// import Login from "../../pages/Auth/login/Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routing = (
    <>
      <Link
        to="/"
        className="text-secondary hover:border-b-2 hover:text-primary duration-500 border-b-primary   font-bold  mx-3 "
      >
        Home
      </Link>
      <Link
        to="/shop"
        className="text-secondary hover:border-b-2 hover:text-primary duration-500 border-b-primary   font-bold  mx-3 "
      >
        Shop
      </Link>
      <Link
        to="/blog"
        className="text-secondary hover:border-b-2 hover:text-primary duration-500 border-b-primary   font-bold  mx-3"
      >
        Blog
      </Link>
      <Link
        to="/about"
        className="text-secondary hover:border-b-2 hover:text-primary duration-500 border-b-primary   font-bold  mx-3"
      >
        About Us
      </Link>

      <Link
        to="/contact"
        className="text-secondary hover:border-b-2 hover:text-primary duration-500 border-b-primary   font-bold  mx-3"
      >
        Contact Us
      </Link>
      {/* <Link
        to="/add-cart"
        className="text-secondary  hover:text-primary duration-500  font-bold  mx-3"
      >
       
      </Link> */}
    </>
  );
  return (
    <div className="hidden lg:block shadow   w-full bg-white z-50 relative">
      <div className="mx-4  max-w-6xl xl:mx-auto ">
        <div className=" flex justify-between ">
          {/* logo */}
          <div className="flex gap-4 items-center justify-center ">
            <Link to="/" className=" lg:h-[70px]   ">
              {/* <img src={logo} alt="" className="w-full h-full" /> */}
            </Link>
            <h3 className=" text-primary text-3xl  lg:text-4xl  font-medium ">
              {" "}
              Al MADH BD
            </h3>
          </div>
          {/* search-option */}

          {/* routing */}
          <div className="flex items-center">
            <div className="flex items-center justify-center ">{routing}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
