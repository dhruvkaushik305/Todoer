import React from "react";
import Quote from "./Quote";
const Greetings: React.FC = () => {
  return (
    <div className="row-span-2 flex flex-col justify-center gap-1 overflow-hidden rounded-md p-1 md:col-span-2">
      <p className="text-4xl font-semibold">Hi Dhruv,</p>
      <Quote />
    </div>
  );
};
export default Greetings;
