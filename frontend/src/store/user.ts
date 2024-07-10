import { atom } from "recoil";
import { UserType } from "../Lib/userType";

export const userAtom = atom({
  key: "user",
  default: null as UserType | null,
});
