import { body, validationResult, matchedData } from "express-validator";
import { BadRequestError } from "../errors/customError.js";
import User from "../models/user.model.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        const msgs = result.array().map((e) => e.msg);
        const first = msgs[0] || "bad request";
        return next(new BadRequestError(msgs)); // ✅ pass to error handler
      }
      next();
    },
  ];
};

export const validateRegisterInput = withValidationErrors([
  body("fullName").notEmpty().withMessage("full name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateVerifyEmailInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("code")
    .notEmpty()
    .withMessage("verification code is required")
    .isLength({ min: 6, max: 6 })
    .withMessage("verification code must be 6 characters long"),
]);

export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
]);

export const validateForgotPasswordInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
]);

export const validateNewPassword = withValidationErrors([
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password length minimum 8"),
  body("confirm_password")
    .notEmpty()
    .withMessage("confirm password is required")
    .isLength({ min: 8 })
    .withMessage("password length minimum 8"),
]);
// export const validateUpdateUserInput = withValidationErrors([
//   body("name").notEmpty().withMessage("name is required"),
//   body("email")
//     .notEmpty()
//     .withMessage("email is required")
//     .isEmail()
//     .withMessage("invalid email format")
//     .custom(async (email, { req }) => {
//       const user = await User.findOne({ email });
//       if (user && user._id.toString() !== req.user.userId) {
//         throw new Error("email already exists");
//       }
//     }),
// ]);
