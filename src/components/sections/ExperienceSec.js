import React from "react";
import { experienceInfo } from "../../assets/data/textInformation";
// Dependecy
import { v4 as uuidv4 } from "uuid";

const ExperienceSec = () => {
  return (
    <section id="experience" className="w-full min-h-screen custom-container">
      {/* Header Of Section */}
      <div className="w-full flex items-center text-white">
        <h1 className="sm:text-[4rem] text-[3rem] font-bold sm:mr-4">
          Experience <span className="text-ctrgreen">.</span>
        </h1>
        <div className="flex-auto h-[1px] sm:block hidden bg-ClBlack-700"></div>
      </div>
      {/* Experinces */}
      <div className="flex flex-col gap-4 w-full  sm:px-4 py-5">
        {/* Job Experience */}
        {experienceInfo.map((item) => {
          return (
            <>
              <div className="flex flex-col border-b py-5" key={uuidv4()}>
                {/* Name Of Company And Time */}
                <div className="flex justify-between mb-3 sm:flex-row flex-col">
                  <h4 className="text-white text-[1.5rem] font-bold">
                    {item.companyName}
                  </h4>
                  <span className="text-white text-lg">
                    {item.entryDate} - {item.exitDate}
                  </span>
                </div>

                {/* Major And City Info */}
                <div className="flex justify-between mb-3 sm:flex-row flex-col">
                  <h4 className="text-ctrgreen text-[1.2rem] font-bold">
                    {item.jobTitle}
                  </h4>
                  <span className="text-white text-lg">{item.City}</span>
                </div>

                {/* Job Description  */}
                <div className="mb-3">
                  <p className="line-clamp-2 text-ClBlack-700 text-lg">
                    {item.jobDesc}
                  </p>
                </div>
                {/* Tools And Tech That Used In That Company */}
                <div className="flex flex-wrap gap-3">
                  {item.jobSkills.map((skill) => {
                    return (
                      <span
                        className="px-3 py-1  bg-ClBlack-800 text-white rounded-full"
                        key={uuidv4()}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSec;
