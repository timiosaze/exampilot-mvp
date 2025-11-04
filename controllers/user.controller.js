import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";
import { verifyJWT } from "../utils/tokenUtils.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = { ...user, password: undefined };

  // const userWithoutPassword = user.toJSON();
  // console.log(userWithoutPassword);
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
