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

router.use("/todo", authMiddleware);
router.get("/todo/all", getAllTodos);
router.put("/todo/add", addTodo);
router.put("/todo/updateTitle/:todoId", updateTodoTitle);
router.put("/todo/updateCompletion/:todoId", updateTodoCompletion);
router.put("/todo/updateOrder/:todoId", updateTodoOrder);
router.delete("/todo/:todoId", deleteTodo);
export default router;
