import React, { useRef } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

// images
import headerImg from "../assets/images/bg-pic5.png";
import headerImgMoon from "../assets/images/bg-pic-moon.png";
// custom Hooks
import useMouseFollower from "../hooks/useMouseFollower";

const Header = () => {
  const cursorDot = useRef();
  const cursorOutline = useRef();
  useMouseFollower({ cursorDot, cursorOutline });
  return (
    <header className="w-full min-h-screen  bg-ClBlack-900">
      <Navbar />
      <Sidebar />
      {/* Mouse Follower */}
      <div
        className="w-1 hidden lg:block bg-ctrgreen rounded-full pointer-events-none  h-1 fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] z-[45]"
        ref={cursorDot}
      ></div>
      <div
        className="w-12 h-12 hidden lg:block rounded-full border fixed top-0 left-0 translate-x-[-50%] translate-y-[-50%] z-[45] pointer-events-none"
        ref={cursorOutline}
      ></div>

      {/* Header Text And Image */}
      <div className="custom-container w-full min-h-[100vh]">
        <div className="flex items-center lg:flex-row sm:flex-col flex-row ">
          <div className=" flex-1 ">
            <h2 className="text-[3.5rem] sm:text-[5rem] font-bold text-white">
              Hey, I'm Mehran<span className="text-ctrgreen">.</span>
            </h2>
            <h4 className="text-white text-[1.5rem] sm:text-[2.5rem] pb-4">
              I'm a <span className="text-ctrgreen">Front End Developer</span>
            </h4>
            <p className="text-white sm:text-lg">
              Striving and curious to learn new issues and experiences and very
              interested in learning and applying technical skills in a dynamic
              work environment and interaction and teamwork
            </p>
          </div>
          <div className="p-5 w-80 h-80 flex-2 hidden sm:block relative">
            <img src={headerImg} className="w-full h-full" alt="" />
            <div className="w-20 h-20 animate-mover absolute right-[20%] top-[22%]">
              <img src={headerImgMoon} className="w-full h-full" alt="/" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
