import React from "react";
import Greetings from "./Greetings";
import TimeLayout from "./TimeLayout";
const DashboardLayout: React.FC = () => {
  return (
    <div className="grid w-[95%] grid-cols-1 grid-rows-2 items-center gap-2 rounded-[1.25rem] bg-gray-200 p-3 sm:p-5 md:w-[90%] md:grid-cols-3 md:grid-rows-1 xl:w-[80%]">
      <Greetings />
      <TimeLayout />
    </div>
  );
};
export default DashboardLayout;
