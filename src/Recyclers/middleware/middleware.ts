import { NextFunction, Request, Response } from "express";
import { Jwt } from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const loginMiddleware = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  try {
  } catch (e) {

    
  }
};
