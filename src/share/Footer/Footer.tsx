import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#252525] py-6 ">
      <div className="md:max-w-7xl lg:mx-auto mx-5 md:mx-8  mt-14">
        <div className=" grid  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          <div className="">
            <div>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                58 Howard Street #2 San Francisco
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                contact@homeid.com
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                (+68)1221 09876
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                www.homeid.com
              </p>
            </div>
          </div>

          <div className="">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Buy
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Rent
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Buy
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Offices for Rent
              </p>
            </div>
          </div>
          <div className="">
            <div>
              <p className=" font-semibold text-xl transition duration-500 text-white mb-2">
                Popular Searches
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment for Rent
              </p>
              <p className="text-gray-400 font-medium transition duration-500 hover:text-white mb-2">
                Apartment Low to hide
              </p>
              <div className="flex mt-4">
                <input
                  className="rounded-md rounded-r-none px-1"
                  type="text"
                  placeholder="Enter address"
                />
                <button className="bg-secondary px-4 lg:px-2 py-3 rounded-l-none rounded-md text-white flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex justify-between md:p-8 mt-10">
          <div>
            <span className="text-gray-400 font-medium transition duration-500 hover:text-white">
              Terms of Use
            </span>
            <span className="text-gray-400 font-medium transition duration-500 hover:text-white">
              {" "}
              Privacy Policy
            </span>
          </div>
          <p className="text-gray-400 font-medium transition duration-500 hover:text-white">
            © 2020 homeID. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
