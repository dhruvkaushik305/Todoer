import React from "react";
import Stopwatch from "./Stopwatch";
const TimeLayout: React.FC = () => {
  return (
    <div className="flex flex-col rounded-[2rem]">
      <p className="flex items-center justify-center p-1 text-xl font-medium">
        Ready? Time!
      </p>
      <Stopwatch />
    </div>
  );
};
export default TimeLayout;
