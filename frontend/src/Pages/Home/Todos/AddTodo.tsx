import React from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../../../store/todo";
import { addTodo } from "../../../actions/todoActions";
import { TodoType } from "../../../Lib/todoType";

const AddTodo: React.FC = () => {
  const setTodos = useSetRecoilState(todoAtom);
  const titleRef = React.useRef<HTMLInputElement>(null);
  const handleAddTodo = async () => {
    let order = 0;
    if (titleRef.current!.value.trim() !== "") {
      const newTodoTitle = titleRef.current!.value;
      titleRef.current!.value = "";
      setTodos((prev) => {
        order = prev.length + 1;
        return [
          ...prev,
          {
            _id: "-1",
            id: "-1",
            order,
            title: newTodoTitle,
            completed: false,
          },
        ];
      });
      const newTodo = await addTodo(newTodoTitle, order);
      if (newTodo) {
        setTodos(
          (prev) =>
            prev.map((todo) =>
              todo._id === "-1" ? newTodo : todo,
            ) as TodoType[],
        );
      }
    }
  };
  return (
    <div className="flex w-full items-center justify-center rounded-[1rem] bg-white/90 p-2 px-4 md:w-[90%] xl:w-[80%]">
      <input
        type="text"
        placeholder="Add todo"
        className="w-full bg-transparent text-gray-700 focus:outline-none"
        ref={titleRef}
        onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
      />
      <button
        className="rounded-[1rem] bg-gray-600 px-4 py-1 text-white"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};
export default AddTodo;
