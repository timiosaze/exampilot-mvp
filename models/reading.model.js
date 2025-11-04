import mongoose, { Schema } from "mongoose";

const readingSchema = new Schema({
  name: {
    type: String,
  },
  sectionA: {
    passage: String,
    passage_questions: [
      {
        question: String,
        options: Array,
        answer: String,
        answerText: String,
      },
    ],
    letter: String,
    letter_questions: [
      {
        index: Schema.Types.Int32,
        options: Array,
        answer: String,
        answerText: String,
      },
    ],
  },
  sectionB: {
    email: String,
    email_questions: [
      {
        index: Schema.Types.Int32,
        options: Array,
        answer: String,
        answerText: String,
      },
    ],
    other_questions: [
      {
        question: String,
        options: Array,
        answerText: String,
      },
    ],
  },
  sectionC: {
    passage: String,
    options: Array,
    passage_questions: [
      {
        index: Schema.Types.Int32,
        question: String,
        answer: String,
      },
    ],
  },
  sectionD: {
    article_paragraphs: Array,
    article_questions: [
      {
        index: Schema.Types.Int32,
        question: String,
        options: Array,
        answerText: String,
      },
    ],
    letter: String,
    letter_questions: [
      {
        index: Schema.Types.Int32,
        options: Array,
        answer: String,
        answerText: String,
      },
    ],
  },
});

const Reading = mongoose.model("Reading", readingSchema);

export default Reading;
