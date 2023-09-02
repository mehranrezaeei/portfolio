import React, { useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="w-full min-h-screen  bg-ClBlack-900">
      <Navbar />
      <Sidebar />
    </header>
  );
};

export default Header;
