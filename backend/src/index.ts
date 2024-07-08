import express from "express";
import dbConnect from "./db";
import Todo from "./Models/todo";
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.listen(port, () => console.log(`Listening on port ${port}`));
dbConnect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
