import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userAtom } from "../store/user";
import { getUserInfo } from "../actions/userActions";
const useHomeAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authorization") !== null;
  const setUserInfo = useSetRecoilState(userAtom);
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    } else {
      console.log(
        "Attempting to get user info with token",
        localStorage.getItem("authorization"),
      );
      getUserInfo().then((data) => {
        if (data && data.success) {
          setUserInfo(data.user!);
        }
      });
    }
  }, []);
};
export default useHomeAuth;
