import React, { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const DashboardNavbar = ({ handleClick, menuState }) => {
  const role = "User";
  const [hover, setHover] = useState(false);

  const handleLogout = () => {
    dispatch(removeUser());
    toast.success("Signout Success");
  };
  return (
    <div>
      <div className="bg-white rounded flex justify-between items-center p-3">
        <div className="cursor-pointer flex justify-between items-center">
          {/* <CgMenuMotion className='text-secondary' size={24} onClick={handleClick} /> */}
          {menuState ? (
            <FaRegArrowAltCircleLeft
              className="text-primary"
              size={24}
              onClick={handleClick}
            />
          ) : (
            <FaRegArrowAltCircleRight
              className="text-primary"
              size={24}
              onClick={handleClick}
            />
          )}
          <div className="">
            {/* <div className='flex items-center border rounded-full px-2 py-1 ml-2 lg:ml-20 bg-[#ECF0F3]'>
            <input type="text" placeholder="Search Now" className="bg-[#ECF0F3]" />
            <BiSearchAlt2 className='text-secondary'/>
            </div> */}
          </div>
        </div>
        <div className="flex items-center">
          {/* <div className="border-r-2 mr-3 pr-5">
            <RiNotification4Line className='text-secondary' size={24} />
          </div> */}
          <div
            className=" pb-1 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <img
              className="w-8 h-8 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div
        className={` text-secondary absolute top-14 right-3 rounded-md ${
          hover ? "visible" : "invisible"
        } `}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ul>
          {role === "employee" ? (
            <Link to="/profile">
              <li className="border-b px-5 py-2 flex items-center">
                {" "}
                <AiOutlineUser className="mr-1" /> Profile
              </li>
            </Link>
          ) : null}
          <li
            className="border-b px-5 py-2 cursor-pointer flex items-center"
            onClick={handleLogout}
          >
            {" "}
            <FiLogOut className="mr-1" /> Sign out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
