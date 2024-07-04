import React from "react";
import { useNavigate } from "react-router-dom";
const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed flex h-[4rem] w-full items-center justify-between bg-gray-200 px-2 md:justify-around">
      <header
        className="text-2xl font-bold md:text-3xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </header>
      <div
        className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-3 font-medium"
        onClick={() => navigate("/profile/dhruvkaushik")}
      >
        D
      </div>
    </div>
  );
};
export default NavbarLayout;
