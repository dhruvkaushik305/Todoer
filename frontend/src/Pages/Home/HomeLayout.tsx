import React from "react";
import DashboardLayout from "./Dashboard/DashboardLayout";
import TodosLayout from "./Todos/TodosLayout";
import useHomeAuth from "../../Hooks/useHomeAuth";
import Quote from "./Dashboard/Quote";
const HomeLayout: React.FC = () => {
  useHomeAuth();
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <DashboardLayout />
      <TodosLayout />
      <Quote />
    </div>
  );
};
export default HomeLayout;
