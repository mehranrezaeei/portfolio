import React from "react";
// Components
import About from "./sections/AboutSec";
import Projects from "./sections/ProjectSec";
import Experience from "./sections/ExperienceSec";

const Main = () => {
  return (
    <main className="bg-ClBlack-900 flex flex-col gap-14 overflow-x-hidden  w-full">
      <About />
      <Projects />
      <Experience />
    </main>
  );
};

export default Main;
