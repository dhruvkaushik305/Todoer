import mongoose from "mongoose";
const activityDataSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  count: {
    type: Number,
    default: 0,
  },
  level: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    enum: ["todo", "time"],
  },
});
const ActivityData = mongoose.model("ActivityData", activityDataSchema);
export default ActivityData;
