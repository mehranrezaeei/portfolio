import React from "react";
// Images
import myLogo from "../assets/icons/My Merhan Rezaei Logo.svg";

const Sidebar = () => {
  return (
    <div className="fixed z-50 top-0 left-0 w-auto bg-black h-screen sideFader">
      <a href="/" className="w-full  flex justify-center overflow-hidden">
        <img
          src={myLogo}
          className="w-10 h-10 p-1 my-5 mx-2 bg-ClBlack-900 text-white rounded-md"
          alt="/"
        />
      </a>

      <div className="list-none w-full  items-center text-white flex writingMode overflow-hidden">
        {/* About */}
        <a
          href="#about"
          className="sm:hover:text-gray-300 border-r bg-transparent text-ClBlack-700 border-black delay-[50ms] sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r sideFader sideScroll"
        >
          About
        </a>
        {/* Projects */}
        <a
          href="#projects"
          className="sm:hover:text-gray-300 border-r bg-transparent text-ClBlack-700 border-black delay-[50ms] sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r sideFader sideScroll"
        >
          Projects
        </a>
        {/* Experience */}
        <a
          href="#experience"
          className="sm:hover:text-gray-300 border-r bg-transparent text-ClBlack-700 border-black delay-[50ms] sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r sideFader sideScroll"
        >
          Exp
        </a>
        {/* Contact */}
        <a
          href="#contact"
          className="sm:hover:text-gray-300 border-r bg-transparent text-ClBlack-700 border-black delay-[50ms] sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r sideFader sideScroll"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
