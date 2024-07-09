import React from "react";
import AddTodo from "./AddTodo";
import TodosList from "./TodosList";
import useFetchTodos from "../../../Hooks/useFetchTodos";

const TodosLayout: React.FC = () => {
  useFetchTodos();
  return (
    <div className="flex h-full w-[95%] flex-col items-center gap-4 rounded-[1.25rem] bg-gray-200 p-3 md:w-[90%] md:gap-7 md:p-5 xl:w-[80%]">
      <AddTodo />
      <TodosList />
    </div>
  );
};

export default TodosLayout;
