import { atom } from "recoil";
const initalState = [
  {
    id: 1,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    title: "Buy bread",
    completed: true,
  },
  {
    id: 3,
    title: "Buy eggs",
    completed: false,
  },
  {
    id: 4,
    title: "Buy butter",
    completed: false,
  },
  {
    id: 5,
    title: "Buy cheese",
    completed: true,
  },
  {
    id: 6,
    title: "Buy meat",
    completed: false,
  },
  {
    id: 7,
    title: "Buy bread",
    completed: true,
  },
  {
    id: 8,
    title: "Buy eggs",
    completed: false,
  },
];
export const todoAtom = atom({
  default: initalState,
  key: "todoAtom",
});
