import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../Models/userModel";
interface RequestWithUser extends Request {
  userId?: string;
}
interface DecodedToken extends jwt.JwtPayload {
  id: string;
}
export const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as DecodedToken;
      const user = await User.findById(decodedToken.id);
      if (!user) return res.status(401).json({ message: "Unauthorized" });
      req.userId = decodedToken.id;
      next();
    } catch (err) {
      res.status(401).json({ message: "Unauthorized", err });
    }
  } else {
    res.status(401).json({ message: "Identity required" });
  }
};
