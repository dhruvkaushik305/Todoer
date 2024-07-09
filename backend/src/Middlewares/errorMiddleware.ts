import { Request, Response, NextFunction } from "express";
import { HttpError } from "http-errors";
const errorMiddleware = (
  err: HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("Gracefully caught,", err.message);
  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
};
export default errorMiddleware;
