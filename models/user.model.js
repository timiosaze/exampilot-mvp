import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullName: String,
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: String,
    phone: {
      type: String,
      default: "",
    },
    lastLogin: {
      type: Date,
      default: null,
    },
    isVerified: { type: Boolean, default: false },
    verificationToken: String,
    verificationTokenExpiresAt: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpiresAt: Date,
    testResults: {
      listening: Schema.Types.Int32,
      reading: {
        scores_array: Array,
        score: Schema.Types.Int32,
      },
      writing: {
        scores_array: Array,
        score: Schema.Types.Int32,
      },
      speaking: {
        scores_array: Array,
        score: Schema.Types.Int32,
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
