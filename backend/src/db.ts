import mongoose from "mongoose";
const dbConnect = () => {
  if (!process.env.MONGODB_URL) {
    throw new Error("No MongoDB URL found. Did you add it in the env?");
  }
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Error connecting to MongoDB", err));
};
export default dbConnect;
