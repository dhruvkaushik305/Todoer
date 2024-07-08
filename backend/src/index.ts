import express from "express";
import dbConnect from "./db";
import router from "./Routes/router";
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());
app.listen(port, () => console.log(`The server is listening on port ${port}`));
dbConnect();
app.use("/api", router);
app.get("/", (req, res) => {
  res.status(200).json({ message: "The server is online" });
});
