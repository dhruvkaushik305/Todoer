import React from "react";
import Greetings from "./Greetings";
import TimeLayout from "./TimeLayout";
const DashboardLayout: React.FC = () => {
  return (
    <div className="flex w-[80%] items-center justify-between rounded-[2rem] bg-gray-100 p-5">
      <Greetings />
      <TimeLayout />
    </div>
  );
};
export default DashboardLayout;
