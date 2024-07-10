import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Home/HomeLayout";
import ProfileLayout from "./Profile/ProfileLayout";
import SignupLayout from "./Auth/SignupLayout";
import LoginLayout from "./Auth/LoginLayout";
const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/auth/signup" element={<SignupLayout />} />
      <Route path="/auth/login" element={<LoginLayout />} />
      <Route path="/profile/*" element={<ProfileLayout />} />
    </Routes>
  );
});
export default AppRoutes;
