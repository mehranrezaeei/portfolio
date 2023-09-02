import React, { useState, useEffect } from "react";
// Images
import myLogo from "../assets/icons/My Merhan Rezaei Logo.svg";
// custom Hooks
import ScrollSpy from "../hooks/useScrollSpy";

const Sidebar = () => {
  const [activeSideBtn, setactiveSideBtn] = useState({
    abActive: false,
    prActive: false,
    exActive: false,
    coActive: false,
  });
  useEffect(() => {
    ScrollSpy(setactiveSideBtn);
  }, []);

  return (
    <div className="fixed z-50 top-0 left-0 w-auto bg-black h-screen">
      <a href="/" className="w-full  flex justify-center overflow-hidden">
        <img
          src={myLogo}
          className="w-10 h-10 p-1 my-5 mx-2 bg-ClBlack-900 text-white rounded-md"
          alt="/"
        />
      </a>

      <div className="list-none w-full overflow-hidden items-center text-white flex writingMode">
        {/* About */}
        <a
          href="#about"
          className={` sm:hover:text-gray-300 border-r sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r ${
            activeSideBtn.abActive
              ? "border-ctrgreen text-gray-300 bg-ClBlack-900"
              : "bg-transparent text-ClBlack-700 border-black"
          }`}
        >
          About
        </a>
        {/* Projects */}
        <a
          href="#projects"
          className={` sm:hover:text-gray-300 border-r sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r ${
            activeSideBtn.prActive
              ? "border-ctrgreen text-gray-300 bg-ClBlack-900"
              : "bg-transparent text-ClBlack-700 border-black"
          }`}
        >
          Projects
        </a>
        {/* Experience */}
        <a
          href="#experience"
          className={` sm:hover:text-gray-300 border-r sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r ${
            activeSideBtn.exActive
              ? "border-ctrgreen text-gray-300 bg-ClBlack-900"
              : "bg-transparent text-ClBlack-700 border-black"
          }`}
        >
          Exp
        </a>
        {/* Contact */}
        <a
          href="#contact"
          className={` sm:hover:text-gray-300 border-r sm:hover:border-ctrgreen py-6 sm:text-lg px-5 sm:hover:bg-ClBlack-900 hover:border-r ${
            activeSideBtn.coActive
              ? "border-ctrgreen text-gray-300 bg-ClBlack-900"
              : "bg-transparent text-ClBlack-700 border-black"
          }`}
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
