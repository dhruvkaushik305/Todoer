import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";
import { FiEdit3 } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useSetRecoilState } from "recoil";
import { FaCheck } from "react-icons/fa";
import { todoAtom } from "../../../store/todo";
import { deleteTodo } from "../../../actions/todoActions";
import { TodoType } from "../../../Lib/todoType";

const Todo: React.FC<TodoType> = ({ _id, id, title, completed }) => {
  const titleRef = React.useRef<HTMLInputElement>(null);
  const setTodos = useSetRecoilState(todoAtom);
  const [edit, setEdit] = React.useState(false);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = { transform: CSS.Transform.toString(transform), transition };
  const triggerEditTodo = () => {
    titleRef.current!.disabled = false;
    titleRef.current!.focus();
    setEdit(true);
  };
  const editHandler = () => {
    titleRef.current!.disabled = true;
    setEdit(false);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, title } : todo)),
    );
  };
  const deleteHandler = async () => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    await deleteTodo(_id);
  };
  const completionHandler = () => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo,
      ),
    );
  };
  const keyboardHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == "Enter") {
      editHandler();
    }
    if (event.key == "Escape") {
      titleRef.current!.disabled = true;
      setEdit(false);
    }
    if (event.key == "Delete") {
      deleteHandler();
    }
  };
  return (
    <div
      key={id}
      className="flex w-full items-center justify-between rounded-xl bg-white p-3"
      {...attributes}
      ref={setNodeRef}
      style={style}
    >
      <div className="flex grow items-center gap-3">
        <RxDragHandleDots2
          className="cursor-grab active:cursor-grabbing"
          {...listeners}
          style={{ touchAction: "none" }}
        />
        <input
          type="checkbox"
          checked={completed}
          className="size-4"
          onChange={completionHandler}
        />
        <input
          type="text"
          defaultValue={title}
          disabled
          onKeyDown={keyboardHandler}
          ref={titleRef}
          className={`w-full bg-white p-1 text-lg focus:outline-none ${completed ? "text-gray-400 line-through" : "text-gray-700"}`}
        />
      </div>
      <div className="flex items-center gap-2">
        {edit ? (
          <FaCheck onClick={editHandler} />
        ) : (
          <FiEdit3 onClick={triggerEditTodo} />
        )}
        <MdDeleteOutline onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default Todo;
