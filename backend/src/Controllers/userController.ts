import { Response, Request, NextFunction } from "express";
import User from "../Models/userModel";

interface RequestWithUser extends Request {
  userId?: string;
}
export const getInfo = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(req.userId);
    return res.status(200).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};
