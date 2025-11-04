import mongoose, { Schema } from "mongoose";

const writingSchema = new Schema({
  name: String,
  email_question: String,
  email_essay: String,
  email_info: Array,
  survey_question: String,
  survey_essay_title: String,
  survey_essay_body: String,
  survey_options: [
    {
      option_value: String,
      option_text: String,
    },
  ],
});

const Writing = mongoose.model("Writing", writingSchema);

export default Writing;
