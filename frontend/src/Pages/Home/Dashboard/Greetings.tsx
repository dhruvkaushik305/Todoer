import React from "react";
import Quote from "./Quote";
import { useRecoilValue } from "recoil";
import { userAtom } from "../../../store/user";
const Greetings: React.FC = () => {
  const userInfo = useRecoilValue(userAtom);
  return (
    <div className="row-span-2 flex flex-col justify-center gap-1 overflow-hidden rounded-md p-1 md:col-span-2">
      <p className="text-4xl font-semibold">
        Hi {userInfo && userInfo.name.split(" ")[0]},
      </p>
      <Quote />
    </div>
  );
};
export default Greetings;
