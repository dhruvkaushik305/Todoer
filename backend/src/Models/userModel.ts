import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "todo",
      default: [],
    },
  ],
  activityData: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "activityData",
      default: [],
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});
const User = mongoose.model("user", userSchema);
export default User;
