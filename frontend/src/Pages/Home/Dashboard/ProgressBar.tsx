import React from "react";
import { todoAtom } from "../../../store/todo";
import { useRecoilValue } from "recoil";
const ProgressBar: React.FC = () => {
  const todos = useRecoilValue(todoAtom);
  const totalTasks = todos.length;
  const completedTasks = todos.filter((task) => task.completed).length;
  const percentageCompleted =
    totalTasks === 0 ? 0 : ((completedTasks / totalTasks) * 100).toFixed(0);
  return (
    <div className="flex items-center justify-center gap-2">
      <div className="h-2 w-full rounded-md bg-gray-300">
        <div
          className="h-full rounded-md bg-green-500/80"
          style={{ width: `${percentageCompleted}%` }}
        ></div>
      </div>
      <p className="text-nowrap font-medium text-gray-700">
        {percentageCompleted}% Done
      </p>
    </div>
  );
};
export default ProgressBar;
