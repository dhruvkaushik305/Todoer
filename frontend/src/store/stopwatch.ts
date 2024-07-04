import { atom } from "recoil";

export const timeAtom = atom({
  key: "time",
  default: 0,
});
export const isRunningAtom = atom({
  key: "isRunning",
  default: false,
});
