import mongoose, { Schema } from "mongoose";

const listeningSchema = new Schema(
  {
    question_audio: {
      type: String,
    },
    question_array: [
      {
        audio: String,
        optionA: String,
        optionB: String,
        optionC: String,
        optionD: String,
        answer: String,
      },
    ],
  },
  { timestamps: true }
);

const Listening = mongoose.model("Listening", listeningSchema);

export default Listening;
