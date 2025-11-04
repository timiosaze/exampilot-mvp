import { StatusCodes } from "http-status-codes";
import User from "../models/user.model.js";
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../errors/customError.js";
import "express-async-errors"; // <-- patch Express 4 to catch async throws
import { createJWT } from "../utils/tokenUtils.js";
import generateTokenAndSetCookie from "../utils/generateTokenAndSetCookie.js";
import {
  sendVerificationEmail,
  sendWelcomeEmail,
  sendPasswordResetEmail,
  sendResetPasswordSuccessEmail,
} from "../mailer/email.js";
import crypto from "crypto";

export const register = async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;
    const hashedPassword = await hashPassword(password);
    const verificationToken = Math.floor(
      100000 + Math.random() * 900000
    ).toString();
    const user = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      verificationToken,
      verificationTokenExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    });
    await user.save();
    //jwt
    await generateTokenAndSetCookie(res, user._id);
    //send verification email
    await sendVerificationEmail(user.email, verificationToken);

    res.status(StatusCodes.CREATED).json({
      success: true,
      message: "User created successfully",
      user: { ...user._doc, password: undefined },
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new UnauthenticatedError("Invalid email or password");
  }
  const token = await generateTokenAndSetCookie(res, user._id);
  // console.log(user);
  res.status(StatusCodes.OK).json({
    success: true,
    token: token,
    message: "Logged in successfully",
    user: { ...user._doc, password: undefined },
  });
};

export const verifyEmail = async (req, res) => {
  const { email, code } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Invalid email or code");
  }
  if (user.isVerified) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "Email is already verified",
    });
  }
  if (
    user.verificationToken !== code ||
    user.verificationTokenExpiresAt < new Date()
  ) {
    throw new UnauthenticatedError("Invalid or expired verification code");
  }
  user.isVerified = true;
  user.verificationToken = undefined;
  user.verificationTokenExpiresAt = undefined;
  await user.save();
  await sendWelcomeEmail(user.email, user.fullName);

  res.status(StatusCodes.OK).json({
    success: true,
    message: "Email verified successfully",
  });
};

export const logOut = async (req, res) => {
  res.clearCookie("token");
  res.status(StatusCodes.OK).json({
    success: true,
    message: "Logged out successfully",
  });
};

export const forgotPassword = async (req, res) => {
  // Implement forgot password logic here
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(StatusCodes.OK).json({
        success: false,
        message: "No user with that email",
      });
    }
    // Generate reset token and send email logic goes here
    // For now, just respond with a success message to avoid user enumeration attacks
    const resetToken = crypto.randomInt(100000, 1000000).toString();
    const resetTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now
    user.resetPasswordToken = resetToken;
    user.resetPasswordTokenExpiresAt = resetTokenExpiresAt;
    await user.save();
    // Send email with reset token (you need to implement sendPasswordResetEmail)
    await sendPasswordResetEmail(
      user.email,
      `${process.env.CLIENT_URL}reset-password-code-confirm/${user.resetPasswordToken}`
    );

    res.status(StatusCodes.OK).json({
      success: true,
      message: "If that email is registered, you will receive a reset link",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const resetPassword = async (req, res) => {
  // Implement reset password logic here
  const token = req.params.token;
  try {
    const { password } = req.body;
    const user = await User.findOne({ resetPasswordToken: token });
    console.log(user);
    console.log(user.resetPasswordTokenExpiresAt);
    console.log(new Date());
    if (!user || user.resetPasswordTokenExpiresAt < new Date()) {
      throw new UnauthenticatedError("Invalid or expired reset token");
    }
    user.password = await hashPassword(password);
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpiresAt = undefined;
    await user.save();
    await sendResetPasswordSuccessEmail(user.email);
    res.status(StatusCodes.OK).json({
      success: true,
      message: "Password reset successfully",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const getUserResetPassword = async (req, res) => {
  const token = req.params.token;
  try {
    const user = await User.findOne({ resetPasswordToken: token });
    res.status(StatusCodes.OK).json({ email: user.email });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    if (!user) {
      throw new UnauthenticatedError("User not found");
    }
    res.status(StatusCodes.OK).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};
