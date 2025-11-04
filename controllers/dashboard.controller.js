import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";

export const dashboardPage = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = { ...user, password: undefined };
  res.status(StatusCodes.OK).json(userWithoutPassword);
};
