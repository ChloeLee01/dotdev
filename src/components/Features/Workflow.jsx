import React from "react";
import { checklistItems } from "../../constants/data";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
    <div className="workf-wrapper">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate Your{" "}
        <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
          Coding Workflow.
        </span>
      </h2>
      <div className="wf-contents-wrapper flex flex-wrap m-10 lg:m-20 ">
        {checklistItems.map((item, index) => (
          <div key={index} className="wf-content-wrapper p-4 w-full lg:w-1/2">
            <div className="wf-content-box p-3">
              <div className="content-title flex items-center justify-center gap-4 mb-2">
                <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 rounded-full">
                  <CheckCircle2 />
                </div>
                <div>
                  <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                  <p className="text-neutral-400">{item.description}</p>
                </div>
              </div>
              <div className="image-wrapper rounded-lg border border-indigo-700 shadow-sm shadow-indigo-400 ">
                <img
                  className="rounded-lg transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full h-auto"
                  src={item.src}
                  alt="image"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflow;
