import React from "react";
import { useNavigate } from "react-router-dom";
const useAuth = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("authorization") !== null;
  React.useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, []);
};
export default useAuth;
