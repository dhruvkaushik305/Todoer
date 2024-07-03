import React from "react";
import DashboardLayout from "./Dashboard/DashboardLayout";
import TodosLayout from "./Todos/TodosLayout";
const HomeLayout: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 md:gap-14">
      <DashboardLayout />
      <TodosLayout />
    </div>
  );
};
export default HomeLayout;
