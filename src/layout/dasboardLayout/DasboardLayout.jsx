import { Outlet } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import DashboardNavbar from "./../../share/Navbar/DashbordNavbar";

const DasboardLayout = () => {
  const [menuState, setMenuState] = useState(true);
  const [isCollups, setIsCollups] = useState(true);

  const handleClick = () => {
    setIsCollups(!isCollups);
    setMenuState(!menuState);
  };
  return (
    <div>
      <div className="flex  ">
        <Sidebar menuState={menuState} />

        <MobileSidebar
          isCollups={isCollups}
          setIsCollups={setIsCollups}
          menuState={menuState}
          setMenuState={setMenuState}
        />

        <div
          className={`bg-secondary min-h-screen w-full duration-300  ${
            !isCollups ? " ml-[5%] hidden lg:block" : "lg:pl-[20%]"
          }`}
        >
          <DashboardNavbar handleClick={handleClick} menuState={menuState} />
          <Outlet />
        </div>
      </div>
      <h1
        className={`text-center py-2 text-secondary ${
          !isCollups ? "hidden" : null
        }`}
      ></h1>
    </div>
  );
};

export default DasboardLayout;
