import mongoose, { Schema } from "mongoose";

const Test = new Schema({
  test_id: {
    type: String,
    unique: true,
  },
  exam: {
    type: String,
    enum: ["IELTS", "CELPIP"],
  },
  version: {
    type: String,
    enum: ["GT", "General"],
  },
  source: {
    type: String,
  },
  release_year: {
    type: Schema.Types.Int32,
  },
  components: [
    {
      component_id: String,
    },
    {
      subject: String,
      enum: ["Listening", "Reading", "Writing", "Speaking"],
    },
    {
      part_order: Schema.Types.Int32,
    },
    {
      total_time_sec: Schema.Types.Int32,
    },
  ],
});
