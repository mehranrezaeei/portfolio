import React from "react";

const Modal = ({ data, hideModal }) => {
  return (
    <div
      className="fixed flex justify-center min-h-screen overflow-y-auto overflow-hidden backdrop-blur-[12px] inset-0 py-12 z-[1000]"
      onClick={hideModal}
    >
      <button className="absolute right-3 top-3" onClick={hideModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          height="1em"
          width="1em"
          className="fill-white w-7 h-7"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <div
        className="w-full max-w-[700px]  h-fit bg-ClBlack-800 rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={data.image} alt="" className="w-full h-[400px]" />
        <div className="py-3 px-5 text-white">
          <h1 className="text-[3rem]  font-bold">{data.name}</h1>
          <div className="text-ctrgreen text-lg flex-wrap flex gap-2 my-1">
            {data.toolsUsed.map((item) => {
              return <span key={item}>{item}</span>;
            })}
          </div>
          <p className="text-lg my-5">{data.projectDesc}</p>
          <span className="text-[1.5rem] font-bold">
            Project Links<span className="text-ctrgreen">.</span>
          </span>
          <div className="flex gap-4 my-3">
            <a
              href="liveproject"
              className="flex gap-2 items-center hover:underline text-ctrgreen text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="2.4rem"
                width="2.4rem"
                className="fill-ctrgreen w-5 h-5"
              >
                <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
              </svg>
              Source Code
            </a>
            <a
              href="liveproject"
              className="flex gap-2 items-center hover:underline text-ctrgreen text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="2.8rem"
                width="2.8rem"
                className="fill-ctrgreen w-5 h-5"
              >
                <path d="M888.3 757.4h-53.8c-4.2 0-7.7 3.5-7.7 7.7v61.8H197.1V197.1h629.8v61.8c0 4.2 3.5 7.7 7.7 7.7h53.8c4.2 0 7.7-3.4 7.7-7.7V158.7c0-17-13.7-30.7-30.7-30.7H158.7c-17 0-30.7 13.7-30.7 30.7v706.6c0 17 13.7 30.7 30.7 30.7h706.6c17 0 30.7-13.7 30.7-30.7V765.1c0-4.3-3.5-7.7-7.7-7.7zm18.6-251.7L765 393.7c-5.3-4.2-13-.4-13 6.3v76H438c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" />
              </svg>
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
