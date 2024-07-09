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
export const updateTodoTitle = async (title: string, todoId: string) => {
  try {
    const response = await fetch(`/api/todos/updateTitle/${todoId}`, {
      method: "PUT",
      headers: {
        authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title }),
    });
    const data = await response.json();
    if (data.success) return data.updatedTodo;
  } catch (err) {
    console.log("Error updating todo title", err);
    return undefined;
  }
};
export const updateTodoComplettion = async (
  completed: boolean,
  todoId: string,
) => {
  try {
    await fetch(`/api/todos/updateCompletion/${todoId}`, {
      method: "PUT",
      headers: {
        authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed }),
    });
  } catch (err) {
    console.log("Error updating todo completion", err);
    return undefined;
  }
};
export const updateTodoOrder = async (order: number, todoId: string) => {
  //todoId is the id of the uuid of the todo
  try {
    await fetch(`/api/todos/updateOrder/${todoId}`, {
      method: "PUT",
      headers: {
        authorization: token!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ order }),
    });
  } catch (err) {
    console.log("Error updating todo order", err);
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
