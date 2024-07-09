import { NextFunction, Request, Response } from "express";
import User from "../Models/userModel";
import Todo from "../Models/todoModel";
interface RequestWithUser extends Request {
  userId?: string;
}

export const getAllTodos = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const userWithTodos = await User.findById(req.userId).populate({
      path: "todos",
      options: { sort: { order: "asc" } },
    });
    return res.status(200).json({ success: true, todos: userWithTodos!.todos });
  } catch (err) {
    next(err);
  }
};

export const addTodo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { title, order } = req.body;
  if (!title || !order)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const newTodo = await Todo.create({ title, order });
    await User.updateOne(
      { _id: req.userId },
      { $push: { todos: newTodo._id } }
    );
    return res.status(201).json({ success: true, newTodo });
  } catch (err) {
    next(err);
  }
};

export const updateTodoOrder = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  const { order } = req.body;
  if (!todoId || order === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const updatedTodo = await Todo.findOne({ id: todoId });
    updatedTodo!.order = order;
    await updatedTodo!.save();
    return res.status(200).json({ success: true, updatedTodo });
  } catch (err) {
    next(err);
  }
};

export const updateTodoTitle = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { title } = req.body;
  const { todoId } = req.params;
  if (!todoId || !title)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { title },
      { new: true }
    );
    return res.status(200).json({ success: true, updatedTodo });
  } catch (err) {
    next(err);
  }
};

export const updateTodoCompletion = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  const { completed } = req.body;
  if (!todoId || completed === undefined)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: todoId },
      { completed },
      { new: true }
    );
    return res.status(200).json({ success: true, updatedTodo });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const { todoId } = req.params;
  if (!todoId)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    await Todo.deleteOne({ _id: todoId });
    await User.findOneAndUpdate(
      { _id: req.userId },
      { $pull: { todos: todoId } }
    );
    return res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};
