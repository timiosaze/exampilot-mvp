import mongoose, { Schema } from "mongoose";

const speakingSchema = new Schema({
  name: String,
  questions: [
    {
      index: Schema.Types.Int32,
      title: String,
      prompt: String,
      prepSeconds: Schema.Types.Int32,
      speakSeconds: Schema.Types.Int32,
      image: {
        description: String,
        alt: String,
      },
    },
  ],
});

const Speaking = mongoose.model("Speaking", speakingSchema);

export default Speaking;
