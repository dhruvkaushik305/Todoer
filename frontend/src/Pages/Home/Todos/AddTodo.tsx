import React from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../../../store/todo";
const AddTodo: React.FC = () => {
  const setTodos = useSetRecoilState(todoAtom);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const handleAddTodo = () => {
    if (titleRef.current!.value.trim() !== "") {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: titleRef.current!.value,
          completed: false,
        },
      ]);
    }
    titleRef.current!.value = "";
  };
  return (
    <div className="flex w-full items-center justify-center rounded-[1.25rem] bg-white p-2 px-4 md:w-[90%] xl:w-[80%]">
      <input
        type="text"
        placeholder="Add todo"
        className="w-full text-gray-700 focus:outline-none"
        ref={titleRef}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button
        className="rounded-[0.75rem] bg-gray-600 px-4 py-1 text-white"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
