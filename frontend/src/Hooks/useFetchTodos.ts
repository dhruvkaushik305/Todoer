import React from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/todo";
import { fetchAllTodos } from "../actions/todoActions";
export default function useFetchTodos() {
  const setTodos = useSetRecoilState(todoAtom);
  React.useEffect(() => {
    fetchAllTodos().then((data) => setTodos(data.todos));
  });
}
