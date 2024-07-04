import React from "react";
import { useNavigate } from "react-router-dom";
const NavbarLayout: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed flex h-[4rem] w-full items-center justify-around bg-gray-100">
      <header className="text-3xl font-extrabold">Todoer</header>
      <div
        className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-200 p-3 font-medium"
        onClick={() => navigate("/profile/dhruvkaushik")}
      >
        D
      </div>
    </div>
  );
};
export default NavbarLayout;
