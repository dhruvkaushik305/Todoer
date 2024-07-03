import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";

const TodosLayout: React.FC = () => {
  return (
    <div className="flex h-full w-[80%] flex-col items-center gap-5 rounded-xl bg-gray-100 p-5">
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default TodosLayout;
