import mongoose from "mongoose";

const soundSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: {
      type: Buffer,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Sound", soundSchema);
