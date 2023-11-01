import React, { memo, useState } from "react";
// Data
import { projectsInfo } from "../../assets/data/textInformation";
// Dependecy
import { v4 as uuidv4 } from "uuid";
import Modal from "../shared/Modal";

const ProjectSec = memo(() => {
  const [modalHandel, setmodalHandel] = useState({
    modalStatus: false,
    data: {},
  });
  const hideModal = () => {
    setmodalHandel({ modalStatus: !modalHandel.modalStatus });
  };

  if (modalHandel.modalStatus) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <section
      id="projects"
      className="w-full min-h-screen custom-container scrollSections"
    >
      {modalHandel.modalStatus && (
        <Modal data={modalHandel.data} hideModal={hideModal} />
      )}
      <div className="w-full h-full">
        {/* Header Of Section */}
        <div className="w-full flex items-center text-white mb-4">
          <div className="flex-auto h-[1px] sm:block hidden bg-ClBlack-700"></div>
          <h1 className="sm:text-[4rem] text-[3rem] font-bold sm:ml-4">
            Projects <span className="text-ctrgreen">.</span>
          </h1>
        </div>
        {/* Projects View */}
        <div className="grid  md:grid-cols-2 grid-cols-1 w-full  gap-6">
          {/* Map on Projects Data  */}
          {projectsInfo.map((item) => {
            return (
              <div className="flex  flex-col min-h-[500px]" key={uuidv4()}>
                {/* View Modal */}
                <div className="bg-ClBlack-800 rounded-lg flex justify-center relative h-[300px] overflow-hidden secFader">
                  <div
                    className="absolute w-5/6 bottom-[-7%] h-[90%] cursor-pointer rounded-md transition-all overflow-hidden hover:rotate-3 hover:scale-[1.07]"
                    onClick={() => {
                      setmodalHandel({
                        ...modalHandel,
                        modalStatus: !modalHandel.modalStatus,
                        data: item,
                      });
                    }}
                  >
                    <img src={item.image} className="w-full h-full" alt="" />
                  </div>
                </div>
                {/*  Project Name and Links */}
                <div className="flex items-center text-white gap-3 my-2 secFader">
                  <h3 className="text-[1.5rem] font-bold">{item.name}</h3>
                  <div className="h-[1px] bg-ClBlack-700 flex-auto"></div>
                  {/* GitHub Link */}
                  <a href={item.githubUrl}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 1024 1024"
                      height="2.4rem"
                      width="2.4rem"
                      className="fill-ClBlack-700 hover:fill-slate-300 w-8 h-8 transition-colors"
                    >
                      <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                    </svg>
                  </a>
                </div>
                {/* Tools That Used In Project */}
                <div className="flex flex-wrap text-lg items-center  text-ctrgreen gap-3 text-ellipsis overflow-hidden secFader">
                  {item.toolsUsed.map((item) => {
                    return <span key={uuidv4()}>{item}</span>;
                  })}
                </div>
                {/* About Project */}
                <div className="py-2 w-full secFader">
                  <p className="text-ClBlack-700 max-w-full text-[1.25rem] line-clamp-3">
                    {item.projectDesc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

export default ProjectSec;
