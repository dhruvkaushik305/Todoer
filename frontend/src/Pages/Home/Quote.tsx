import React from "react";
import { IoRefreshSharp } from "react-icons/io5";
const Quote: React.FC = () => {
  return (
    <div className="flex max-h-[4rem] max-w-[50rem] items-center gap-2 overflow-y-auto overflow-x-hidden text-xl italic">
      <p className="overflow-x-hiddenp-1 overflow-y-auto text-xl italic">
        “Multitasking is a lie” - Gary Keller
      </p>
      <IoRefreshSharp className="size-15" />
    </div>
  );
};
export default Quote;
