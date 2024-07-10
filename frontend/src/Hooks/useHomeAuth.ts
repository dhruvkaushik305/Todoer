import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedInAtom } from "../store/auth";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userAtom } from "../store/user";
import { getUserInfo } from "../actions/userActions";
const useHomeAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInAtom);
  const setUserInfo = useSetRecoilState(userAtom);
  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth/login");
    } else {
      getUserInfo().then((data) => {
        if (data && data.success) {
          setUserInfo(data.user!);
        }
      });
    }
  }, []);
};
export default useHomeAuth;
