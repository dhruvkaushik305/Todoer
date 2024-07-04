import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "./Home/HomeLayout";
import ProfileLayout from "./Profile/ProfileLayout";
const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/profile/*" element={<ProfileLayout />} />
    </Routes>
  );
});
export default AppRoutes;
