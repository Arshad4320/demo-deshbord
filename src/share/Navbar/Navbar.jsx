import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/image/logo.png";
const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto hidden lg:block">
      <div className=" flex justify-between p-6 ">
        <div className="flex gap-3 items-center justify-center">
          {/* <img src={logo} /> */}
          <div>
            <Link className="text-gray-400 font-semibold text-md p-3" to="/">
              Home
            </Link>
            <Link className="text-gray-400 font-semibold text-md p-3" to="/">
              Dashboard
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Link className="text-gray-400 font-semibold text-md p-3" to={""}>
            Sign In
          </Link>
          <Link className="text-gray-400 font-semibold text-md p-3" to={""}>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
