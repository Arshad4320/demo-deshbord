import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBlogger } from "react-icons/fa";
import { LiaProductHunt } from "react-icons/lia";
import { TbCategory } from "react-icons/tb";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
// import logo from "../../assets/images/logo.png";
const MobileSidebar = ({
  isCollups,
  setIsCollups,
  menuState,
  setMenuState,
}) => {
  const [cuisine, setCuisine] = useState(false);
  const [product, setProduct] = useState(false);
  const [category, setCategory] = useState(false);
  const [blog, setBlog] = useState(false);
  const [vidio, setVidio] = useState(false);
  const [order, setOrder] = useState(false);

  const handleClick = () => {
    setIsCollups(!isCollups);
    setMenuState(!menuState);
  };
  return (
    <div
      className={`${
        !isCollups ? "left-0" : "left-[-1200px]"
      } bg-white  absolute top-0 left-0 block lg:hidden pt-6  duration-300  text-gray-900 rounded-md  z-[9999] shadow-md bottom-0 px-2 w-80 md:w-96`}
    >
      <ul className="flex flex-col h-full ">
        <li
          className={`font-semibold bg-gray-white  py-2 px-3  flex justify-between items-center`}
        >
          <Link className="text-2xl font-medium" to="/">
            Menu
          </Link>
          <span onClick={handleClick} className="cursor-pointer text-gray-900">
            <ImCross />
          </span>
        </li>

        <hr className={`mt-2 mb-2 ${!isCollups && "hidden"}`} />
        <Link to="/">
          <li
            className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
            onClick={handleClick}
          >
            <div className="flex gap-3 items-center">
              <AiOutlineHome />
              {!isCollups && <span>Home</span>}
            </div>
          </li>
        </Link>

        <li
          className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={handleClick}
        >
          <div className="flex gap-3 items-center">
            <GoPeople />
            {!isCollups && <span>New List</span>}
          </div>
        </li>

        {/* order menu start  */}
        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setOrder(!order)}
        >
          <div className="flex items-center gap-3">
            <FaSearch />
            {!isCollups && <span>Search</span>}
          </div>
        </li>

        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setCuisine(!cuisine)}
        >
          <div className="flex items-center gap-3">
            <FaBlogger />
            {!isCollups && <span>About</span>}
          </div>
        </li>
        <div
          className={`pl-5 transition duration-300  ${
            cuisine ? "block  duration-300" : "hidden  duration-300"
          }`}
        ></div>
      </ul>
    </div>
  );
};

export default MobileSidebar;
