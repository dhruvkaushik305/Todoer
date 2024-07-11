import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../store/user";
const NavbarLayout: React.FC = () => {
  const isLoggedIn = localStorage.getItem("authorization") !== null;
  const userInfo = useRecoilValue(userAtom);
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[4rem] w-full items-center justify-between bg-gray-200/95 px-2 md:justify-around">
      <header
        className="font-semiBold text-xl text-gray-800 sm:text-2xl md:text-3xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </header>
      {isLoggedIn ? (
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-400 p-3 font-bold text-gray-800">
          {userInfo && userInfo.name[0].toUpperCase()}
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <button
            className="rounded-xl bg-gray-300 px-3 py-2 font-medium"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
          <button
            className="rounded-xl bg-gray-300 px-3 py-2 font-medium"
            onClick={() => navigate("/auth/signup")}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
};
export default NavbarLayout;
