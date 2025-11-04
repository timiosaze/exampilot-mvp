import express from "express";
import {
  register,
  verifyEmail,
  logOut,
  login,
  forgotPassword,
  resetPassword,
  checkAuth,
} from "../controllers/auth.controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";
import {
  validateForgotPasswordInput,
  validateLoginInput,
  validateNewPassword,
  validateRegisterInput,
  validateVerifyEmailInput,
} from "../middleware/validationMiddleware.js";
import errorHandlerMiddleware from "../middleware/errorHandlerMiddleware.js";
const router = express.Router();
router.get("/check-auth", authenticateUser, checkAuth);
// router.get("/get-code", getUserResetPassword);
router.post("/register", validateRegisterInput, register);
router.post("/verify-email", validateVerifyEmailInput, verifyEmail);
router.post("/login", validateLoginInput, login);
router.post("/logout", logOut);
router.post("/forgot-password", validateForgotPasswordInput, forgotPassword);
router.post(
  "/reset-password-code-confirm/:token",
  validateNewPassword,
  resetPassword
);

export default router;
