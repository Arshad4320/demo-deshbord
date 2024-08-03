import React, { useContext, useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const DashboardNavbar = ({ handleClick, menuState }) => {
  const role = "User";
  const [hover, setHover] = useState(false);

  const { user, logOut } = useContext(AuthProvider);
  console.log(user);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="bg-white rounded flex justify-between items-center p-3">
        <div className="cursor-pointer flex justify-between items-center">
          <>
            {" "}
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
            <p className="text-lg ml-2">{user?.email}</p>
          </>
        </div>
        <div className="flex items-center">
          {user?.uid ? (
            <>
              <li
                className="border-b px-5 py-2 cursor-pointer flex items-center"
                onClick={handleLogOut}
              >
                {" "}
                <FiLogOut className="mr-1" /> Sign out
              </li>
              {/* <li className="border-b px-5 py-2 flex items-center">
                {" "}
                <AiOutlineUser className="mr-1" /> Profile
              </li> */}
            </>
          ) : (
            <div className=" pb-1 cursor-pointer">
              <img
                className="w-8 h-8 rounded-full"
                src="https://cdn.pixabay.com/photo/2023/09/22/12/18/profile-8268938_640.png"
                alt=""
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
