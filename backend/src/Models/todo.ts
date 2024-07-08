import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
});
const Todo = mongoose.model("Todo", todoSchema);
export default Todo;
