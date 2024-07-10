import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom } from "../store/auth";
import { useRecoilValue } from "recoil";
const useAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);
};
export default useAuth;
