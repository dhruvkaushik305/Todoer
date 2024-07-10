import { NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/userModel";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password, username } = req.body;
  if (!name || !email || !password || !username)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const userExists = await User.findOne({ username });
    if (userExists)
      return res
        .status(400)
        .json({ success: false, message: "Username already exists" });
    const hashedPassword = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
      name,
      email,
      password: hashedPassword,
      username,
    });
    if (userCreated)
      return res.status(201).json({ success: true, message: "User created" });
    else
      return res
        .status(400)
        .json({ success: false, message: "Error creating user" });
  } catch (err) {
    next(err);
  }
};
export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Incomplete request" });
  try {
    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res
        .status(400)
        .json({ success: false, message: "User does not exist" });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res
        .status(400)
        .json({ success: false, message: "Incorrect username/password" });
    const token = jwt.sign(
      { id: existingUser._id },
      process.env.JWT_SECRET as string
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        token: "Bearer " + token,
      });
  } catch (err) {
    next(err);
  }
};
