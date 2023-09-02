import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="h-screen w-full flex justify-center custom-container  bg-ClBlack-900"
    >
      <div className="flex flex-col items-center">
        <h1 className="md:text-[7rem] sm:text-[5rem] text-[3.5rem]  text-white font-bold">
          Contact<span className="text-ctrgreen">.</span>
        </h1>
        <p className="text-ClBlack-700 my-6">
          Shoot me an email if you want to connect! You can also find me on
          Linkedin or Twitter if that's more your speed.
        </p>
        <a
          href="mailto:mhrnrezaeei@gmail.com"
          className="sm:text-[1.5rem] text-lg text-white font-bold hover:text-ctrgreen flex items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2.4rem"
            width="2.4rem"
            className="w-8 h-8 hover:fill-ctrgreen"
          >
            <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-80.8 108.9L531.7 514.4c-7.8 6.1-18.7 6.1-26.5 0L189.6 268.9A7.2 7.2 0 0 1 194 256h648.8a7.2 7.2 0 0 1 4.4 12.9z" />
          </svg>
          mhrnrezaeei@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
