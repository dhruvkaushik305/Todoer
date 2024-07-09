import { Router } from "express";
import { login, signup } from "../Controllers/auth";
import { authMiddleware } from "../Middlewares/authMiddleware";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodoCompletion,
  updateTodoOrder,
  updateTodoTitle,
} from "../Controllers/todo";
const router = Router();

router.post("/auth/signup", signup);
router.post("/auth/login", login);

router.use("/todos", authMiddleware);
router.get("/todos/all", getAllTodos);
router.post("/todos/add", addTodo);
router.put("/todos/updateTitle/:todoId", updateTodoTitle);
router.put("/todos/updateCompletion/:todoId", updateTodoCompletion);
router.put("/todos/updateOrder/:todoId", updateTodoOrder);
router.delete("/todos/:todoId", deleteTodo);
export default router;
