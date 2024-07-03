import React from "react";
import { IoRefreshSharp } from "react-icons/io5";
const Quote: React.FC = () => {
  return (
    <div className="overflow-x-hiddentext-xl flex max-h-32 items-center gap-2 overflow-y-auto italic">
      <p className="p-2 text-xl italic">
        "Don't be busy being busy, be busy being done." - Steve Jobs
      </p>
      <IoRefreshSharp className="size-15" />
    </div>
  );
};
export default Quote;
