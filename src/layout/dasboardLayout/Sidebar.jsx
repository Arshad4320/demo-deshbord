import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { LiaProductHunt } from "react-icons/lia";
// import logo from "../../assets/images/logo.png";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { useState } from "react";
import { ImBlogger2 } from "react-icons/im";
import { TbCategory } from "react-icons/tb";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { LuYoutube } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import { FaBlogger, FaSearch } from "react-icons/fa";
const Sidebar = ({ menuState }) => {
  const [cuisine, setCuisine] = useState(false);
  const [product, setProduct] = useState(false);
  const [category, setCategory] = useState(false);
  const [blog, setBlog] = useState(false);
  const [vidio, setVidio] = useState(false);

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        menuState ? "w-[20%] duration-300" : "duration-300"
      } hidden lg:block bg-white `}
    >
      <ul className="flex flex-col h-full">
        <li className={`font-semibold py-3   ${!menuState && "hidden"}`}>
          <div>
            {/* <img className="w-14 h-20 mx-4" src={logo} alt="" /> */}

            <Link to="/">
              {" "}
              <h1 className="text-2xl ml-3 text-primary uppercase">Logo</h1>
            </Link>
          </div>
        </li>

        <Link to="/">
          <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
            <div className="flex items-center gap-3">
              <AiOutlineHome />
              {menuState && <span>Home</span>}
            </div>
          </li>
        </Link>

        <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <div className="flex items-center gap-3">
            <GoPeople />
            {menuState && <span>New List</span>}
          </div>
        </li>

        <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <div className="flex items-center gap-3">
            <FaSearch />
            {menuState && <span>Search</span>}
          </div>
        </li>

        <li
          className="mt-2 duration-300 flex justify-between items-center gap-3 hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2"
          onClick={() => setCuisine(!cuisine)}
        >
          <div className="flex items-center gap-3">
            <FaBlogger />
            {menuState && <span>About</span>}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
