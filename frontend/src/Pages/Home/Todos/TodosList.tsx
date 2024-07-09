import React from "react";
import { useRecoilState } from "recoil";
import Todo from "./Todo";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  DndContext,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { todoAtom } from "../../../store/todo";
import { updateTodoOrder } from "../../../actions/todoActions";
const TodosList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const dragHandler = async (event: any) => {
    const { active, over } = event;
    if (active.id === over.id) return;
    const oldIndex = todos.findIndex((todo) => todo.id === active.id);
    const newIndex = todos.findIndex((todo) => todo.id === over.id);
    setTodos(() => arrayMove(todos, oldIndex, newIndex));
    const update1 = updateTodoOrder(newIndex, active.id);
    const update2 = updateTodoOrder(oldIndex, over.id);
    await Promise.all([update1, update2]);
  };
  const sensors = useSensors(useSensor(PointerSensor), useSensor(TouchSensor));
  return (
    <div className="flex w-full flex-col items-start gap-2 md:w-[90%] xl:w-[80%]">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={dragHandler}
      >
        <SortableContext items={todos} strategy={verticalListSortingStrategy}>
          {todos.map((todo) => (
            <Todo key={todo.id} {...todo} />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};
export default TodosList;
