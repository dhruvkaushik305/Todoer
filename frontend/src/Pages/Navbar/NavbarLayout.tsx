import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInAtom } from "../../store/auth";
import { userAtom } from "../../store/user";
const NavbarLayout: React.FC = () => {
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const userInfo = useRecoilValue(userAtom);
  const navigate = useNavigate();
  return (
    <div className="fixed flex h-[4rem] w-full items-center justify-between bg-gray-200/95 px-2 md:justify-around">
      <header
        className="text-2xl font-bold md:text-3xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </header>
      {isLoggedIn ? (
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-gray-300 p-3 font-medium">
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
