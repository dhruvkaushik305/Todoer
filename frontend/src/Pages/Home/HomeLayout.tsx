import React from "react";
import TodosLayout from "./TodosLayout";
import DashboardLayout from "./DashboardLayout";
const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <DashboardLayout />
      <TodosLayout />
    </div>
  );
};
export default HomeLayout;
