import React from "react";
import Features from "./Features";
import Workflow from "./Workflow";

const index = () => {
  // const a = 10;

  // a % 2 === 0 ? "짝수" : "홀수";
  return (
    <div className="features">
      <div className="container">
        <Features />
        <Workflow />
      </div>
    </div>
  );
};

export default index;
