import { Request, Response } from "express";
import User from "../Models/user";
import Todo from "../Models/todo";
interface RequestWithUser extends Request {
  userId?: string;
}

export const getAllTodos = async (req: RequestWithUser, res: Response) => {
  const userWithTodos = await User.findById(req.userId).populate("todos");
  return res.status(200).json({ success: true, todos: userWithTodos!.todos });
};

export const addTodo = async (req: RequestWithUser, res: Response) => {
  const { title, order } = req.body;
  if (!title || !order)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  const newTodo = await Todo.create({ title, order });
  await User.updateOne({ _id: req.userId }, { $push: { todos: newTodo._id } });
  return res.status(201).json({ success: true, newTodo });
};

export const updateTodoOrder = async (req: RequestWithUser, res: Response) => {
  const { todoId } = req.params;
  const { order } = req.body;
  if (!todoId || !order)
    return res.status(400).json({ message: "Incomplete request" });
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId },
    { order },
    { new: true }
  );
  return res.status(200).json({ success: true, updatedTodo });
};

export const updateTodoTitle = async (req: RequestWithUser, res: Response) => {
  const { title } = req.body;
  const { todoId } = req.params;
  if (!todoId || !title)
    return res.status(400).json({ message: "Incomplete request" });
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId },
    { title },
    { new: true }
  );
  return res.status(200).json({ success: true, updatedTodo });
};

export const updateTodoCompletion = async (
  req: RequestWithUser,
  res: Response
) => {
  const { todoId } = req.params;
  const { completed } = req.body;
  if (!todoId || !completed)
    return res.status(400).json({ message: "Incomplete request" });
  const updatedTodo = await Todo.findOneAndUpdate(
    { _id: todoId },
    { completed },
    { new: true }
  );
  return res.status(200).json({ success: true, updatedTodo });
};

export const deleteTodo = async (req: RequestWithUser, res: Response) => {
  const { todoId } = req.params;
  if (!todoId)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  await Todo.deleteOne({ _id: todoId });
  await User.findOneAndUpdate(
    { _id: req.userId },
    { $pull: { todos: todoId } }
  );
  return res.status(200).json({ success: true });
};
