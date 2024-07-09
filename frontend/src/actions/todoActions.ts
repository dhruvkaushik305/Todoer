const token = localStorage.getItem("authorization");
export const fetchAllTodos = async () => {
  try {
    const response = await fetch("/api/todos/all", {
      headers: {
        authorization: token!,
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("Error fetching todos", err);
    return undefined;
  }
};
export const addTodo = async (title: string, order: number) => {
  try {
    const response = await fetch("/api/todos/add", {
      method: "POST",
      headers: {
        authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, order }),
    });
    const data = await response.json();
    if (data.success) {
      return data.newTodo;
    }
  } catch (err) {
    console.log("Error adding todo", err);
    return undefined;
  }
};
export const deleteTodo = async (todoId: string) => {
  try {
    await fetch(`/api/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        authorization: token!,
      },
    });
  } catch (err) {
    console.log("Error deleting todo", err);
    return undefined;
  }
};
