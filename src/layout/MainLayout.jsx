import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../share/Footer/Footer";
// import Navbar from "../share/Navbar/Navbar";
import MobileNavber from "../share/Navbar/MobileNavbar";

const MainLayout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <MobileNavber />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
