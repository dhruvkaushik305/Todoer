import mongoose from "mongoose";
import { v4 as uuid } from "uuid";
const todoSchema = new mongoose.Schema({
  id: {
    type: String,
    default: () => uuid(),
  },
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  order: {
    type: Number,
    required: true,
  },
});
const Todo = mongoose.model("todo", todoSchema);
export default Todo;
