import React from "react";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../store/user";
import ProgressBar from "./ProgressBar";
const Greetings: React.FC = () => {
  const userInfo = useRecoilValue(userAtom);
  return (
    <div className="row-span-1 flex h-fit flex-col justify-center gap-1 overflow-hidden rounded-md p-1 md:col-span-2">
      <p className="text-3xl font-semibold text-gray-800 sm:text-4xl">
        Hi {userInfo && userInfo.name.split(" ")[0]},
      </p>
      <ProgressBar />
    </div>
  );
};
export default Greetings;
