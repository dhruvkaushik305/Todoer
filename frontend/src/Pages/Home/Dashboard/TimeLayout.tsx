import React from "react";
import Stopwatch from "./Stopwatch";
import { CiStopwatch } from "react-icons/ci";
const TimeLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center rounded-[2rem]">
      <CiStopwatch className="size-6" />
      <Stopwatch />
    </div>
  );
};
export default TimeLayout;
