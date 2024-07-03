import React from "react";
import { todoAtom } from "../../store/todo";
import { useSetRecoilState } from "recoil";
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
    <div className="flex w-[80%] items-center justify-center rounded-lg bg-white p-2 px-4">
      <input
        type="text"
        placeholder="Add todo"
        className="w-full focus:outline-none"
        ref={titleRef}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button
        className="rounded-lg bg-gray-600 px-4 py-1 text-white"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
