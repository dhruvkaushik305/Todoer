import { atom } from "recoil";
import { TodoType } from "../Lib/todoType";
export const todoAtom = atom({
  default: [] as TodoType[],
  key: "todoAtom",
});
