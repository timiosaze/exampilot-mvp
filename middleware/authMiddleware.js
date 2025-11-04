import { UnauthenticatedError } from "../errors/customError.js";
import { verifyJWT } from "../utils/tokenUtils.js";
export const authenticateUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new UnauthenticatedError("authentication invalid");
    }
    const { userId } = verifyJWT(token);
    req.user = { userId };
    next();
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
