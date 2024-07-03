import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const TodosLayout: React.FC = () => {
  return (
    <div className="flex h-full w-[95%] flex-col items-center gap-4 rounded-[2rem] bg-gray-100 p-3 md:w-[90%] md:gap-7 md:p-5 xl:w-[80%]">
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default TodosLayout;
