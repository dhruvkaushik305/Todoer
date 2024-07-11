import React from "react";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../store/todo";
import { fetchAllTodos } from "../actions/todoActions";
export default function useFetchTodos() {
  const isLoggedIn = localStorage.getItem("authorization") !== null;
  const setTodos = useSetRecoilState(todoAtom);
  React.useEffect(() => {
    if (!isLoggedIn) return;
    console.log(
      "Attempting to fetch todos",
      localStorage.getItem("authorization"),
    );
    fetchAllTodos().then((data) => setTodos(data.todos));
  }, []);
}
