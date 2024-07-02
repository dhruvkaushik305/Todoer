import React from "react";
import Quote from "./Quote";
const Greetings: React.FC = () => {
  return (
    <div className="flex flex-col justify-center gap-1 rounded-md p-1">
      <p className="text-4xl font-semibold">Hi Dhruv,</p>
      <Quote />
    </div>
  );
};
export default Greetings;
