import { useState } from "react";
import { Link } from "react-router-dom";

import { RiMenuLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";
import { AiOutlineShop } from "react-icons/ai";

// import logo from "../../assets/images/logo.png";
import { FaLinkedinIn } from "react-icons/fa6";
import { ImBlogger2 } from "react-icons/im";
import React from "react";

import { FaAppStore, FaFacebookF } from "react-icons/fa6";

import { FaWhatsapp } from "react-icons/fa";

const MobileNavber = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const routing = (
    <>
      <Link
        to="/"
        className="cursor-pointer  font-semibold flex items-center gap-2  border-b pb-1 border-b-gray-400  hover:text-primary mb-2 "
      >
        <IoHomeOutline className="text-xl" /> Home
      </Link>
      <Link
        to="/shop"
        className=" cursor-pointer mb-2 font-semibold flex items-center gap-2  border-b pb-1 border-b-gray-400 hover:text-primary  "
      >
        <AiOutlineShop className="text-xl" /> Shop
      </Link>
      <Link
        to="/blog"
        className="flex cursor-pointer items-center gap-2 ml-0.5 mb-2 font-semibold border-b pb-1 border-b-gray-400   hover:text-primary  "
      >
        <ImBlogger2 className="text-lg" /> Blog
      </Link>
      <Link
        to="/about"
        className="flex cursor-pointer items-center gap-2 ml-0.5 mb-2 font-semibold border-b pb-1 border-b-gray-400   hover:text-primary  "
      >
        <FaAppStore className="text-lg" /> About Us
      </Link>
      <Link
        to="/contact"
        className="flex cursor-pointer items-center gap-2 ml-0.5 mb-2 font-semibold border-b pb-1 border-b-gray-400   hover:text-primary  "
      >
        <FaAppStore className="text-lg" /> Contact Us
      </Link>
    </>
  );

  return (
    <div className=" ">
      <div className=" bg-white block lg:hidden fixed z-10 top-0 w-full  shadow-md">
        <div className="flex justify-between   items-center mx-4 ">
          <button
            onClick={toggleMenu}
            className=" cursor-pointer  focus:outline-none flex gap-1 items-center"
          >
            <RiMenuLine className="text-xl text-primary" />
            <p className="text-lg font-semibold text-primary">Menu</p>
          </button>
          <p className="text-xl sm:text-2xl font-semibold text-primary">
            AL MADH BD
          </p>
          <Link className="flex items-center justify-center " to="/">
            {" "}
            <div className=" font-semibold w-[56px] h-[72px]  p-2">
              {/* <img className="w-ful h-full" src={logo} alt="" />{" "} */}
            </div>
            {/* <p className="text-xl sm:text-2xl font-semibold text-primary">
              AL MADH BD
            </p> */}
          </Link>
        </div>
      </div>
      {/* Menu */}
      <div
        className={`-top-1 py-4 fixed  duration-700 bg-white w-2/3 md:w-1/3 h-screen  z-[999]  ${
          isMenuOpen ? "left-0" : "-left-[2000px] "
        }`}
      >
        <div className={`relative`}>
          {/* Menu Content */}
          <div>
            <ul className="px-4 ">
              <button
                onClick={toggleMenu}
                className=" text-primary focus:outline-none py-2 w-full"
              >
                {isMenuOpen && (
                  <div className="flex justify-between border-b pb-1 border-b-gray-400  ">
                    <p className="text-lg font-semibold">Menu</p>
                    <HiMiniXMark className=" h-6 w-6 mr-2" />
                  </div>
                )}
              </button>
              <li
                className="flex flex-col "
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                {routing}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavber;
