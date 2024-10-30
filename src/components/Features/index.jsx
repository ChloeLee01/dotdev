import React from "react";
import { features } from "../../constants/data";

const index = () => {
  // const a = 10;

  // a % 2 === 0 ? "짝수" : "홀수";
  return (
    <div className="features">
      <div className="container">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-center">
          Easily Build{" "}
          <span className="bg-gradient-to-r from-indigo-300 to-indigo-800 text-transparent bg-clip-text">
            Your Codes
          </span>
        </h2>
        {features.map((features, index) => (
          <div
            key={index}
            className={`flex mt-10 ${
              index % 2 === 0 ? "flex-col lg:flex-row" : "flex-col lg:flex-row-reverse"
            }`}>
            <div className="img-wrapper lg:mr-6">
              <img
                src={features.src}
                className="rounded-lg w-full border border-indigo-700 shadow-sm shadow-indigo-400 my-auto mx-auto lg:my-4 lg:mx-2"
              ></img>
            </div>
            <div className="de-wrapper mt-5 lg:mt-10 lg:w-full">
              <div className="flex items-center">
                <div className="icon-box flex justify-center items-center w-15 h-15 dark:bg-neutral-900 text-indigo-700 rounded-full p-2 mx-4 dark:border-0 light: bg-white light: border light: border-neutral-500">
                  <div className="icon w-full h-full">{features.icon}</div>
                </div>
                <div className="de-title text-2xl bg-gradient-to-r from-indigo-300 to-indigo-700 text-transparent bg-clip-text">
                  {features.text}
                </div>
              </div>
              <div className="description mt-4 px-10 lg:px-200 text-neutral-700 dark:text-neutral-300">
                {features.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
