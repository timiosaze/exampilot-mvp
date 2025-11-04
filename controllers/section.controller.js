import { StatusCodes } from "http-status-codes";
import Listening from "../models/listening.model.js";
import Reading from "../models/reading.model.js";
import Writing from "../models/writing.model.js";
import fs from "fs";
import { writeFile } from "node:fs";
import { AssemblyAI } from "assemblyai";
import Speaking from "../models/speaking.model.js";
import User from "../models/user.model.js";
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();
const client2 = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Or directly provide your key
});
const client = new AssemblyAI({ apiKey: "01c9a163bf924a1aa50fff8e9b4c3043" });

export const getAllListening = async (req, res) => {
  const listeningQuestions = await Listening.find({});

  res.status(StatusCodes.OK).json({ listeningQuestions });
};

export const getAllReading = async (req, res) => {
  const readingQuestions = await Reading.find({});

  res.status(StatusCodes.OK).json({ readingQuestions });
};

export const getAllWriting = async (req, res) => {
  const writingQuestions = await Writing.find({});

  res.status(StatusCodes.OK).json({ writingQuestions });
};

export const saveSingleSpeech = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const int8 = new Uint8Array(req.body.data.data);
  const i = req.body.index;
  const question = req.body.question;
  const body = question + ". The answer is ";
  // console.log(question);
  const filename = "public/" + Date.now() + "message.ogg";
  await fs.writeFile(filename, int8, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  const audioUrl = filename;
  const params = { audio: audioUrl };
  // const run = async () => {
  const transcript = await client.transcripts.transcribe(params);
  console.log(transcript.text);
  const essay =
    "You are a CELPIP Writing examiner. Grade the following response on a scale of 1–12 for each criterion: 1.⁠ ⁠Content/Coherence 2.⁠ ⁠Vocabulary 3.⁠Readability/Grammar 4.⁠ ⁠Task Fulfillment. " +
    body +
    " " +
    transcript.text +
    ". Give me only the result in object format";
  console.log(essay);
  await deleteFile(filename);
  const response = await client2.responses.create({
    model: "gpt-5-nano",
    input: essay,
  });

  const data = response.output_text;
  const parsedData = JSON.parse(data);
  console.log(parsedData);

  const totalScore =
    parsedData["Content/Coherence"] +
    parsedData["Vocabulary"] +
    parsedData["Readability/Grammar"] +
    parsedData["Task Fulfillment"];
  const score = totalScore / 4;
  console.log(score);
  user.testResults.speaking.scores_array[i] = score;
  user.save();
  console.log(`speaking result[${i}] is ${score} saved successfully`);

  // };
  // await run();
};

const deleteFile = async (filePath) => {
  await fs.unlink(filePath, (err) => {
    if (err) throw err;
    console.log(`${filePath} was deleted`);
  });
};

export const getAllSpeaking = async (req, res) => {
  const speakingQuestions = await Speaking.find({});

  res.status(StatusCodes.OK).json({ speakingQuestions });
};

export const saveListeningScore = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    console.log(req.body.score);
    user.testResults.listening = Math.ceil(req.body.score * 1.5);
    user.save();
    res
      .status(StatusCodes.OK)
      .json({ message: "User listening score saved successful" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

export const saveReadingScore = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    const score = req.body.score;
    const i = req.body.index;
    user.testResults.reading.scores_array[i] = score;
    user.save();
    res
      .status(StatusCodes.OK)
      .json({ message: "User listening score saved successful" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};

const getResultFromOpenAi = async (section, body) => {
  const essay =
    "You are a CELPIP " +
    section +
    " examiner. Grade the following response on a scale of 1–12 for each criterion: 1.⁠ ⁠Content/Coherence 2.⁠ ⁠Vocabulary 3.⁠Readability/Grammar 4.⁠ ⁠Task Fulfillment. " +
    body +
    ". Give me only the result in object format";
  const response = await client2.responses.create({
    model: "gpt-5-nano",
    input: essay,
  });

  const data = response.output_text;
  const parsedData = JSON.parse(data);
  console.log(parsedData);

  const totalScore =
    parsedData["Content/Coherence"] +
    parsedData["Vocabulary"] +
    parsedData["Readability/Grammar"] +
    parsedData["Task Fulfillment"];
  const score = totalScore / 4;
  console.log(score);
};

export const saveWritingScore = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.userId });
    const essay =
      "You are a CELPIP writing examiner. Grade the following response on a scale of 1–12 for each criterion: 1.⁠ ⁠Content/Coherence 2.⁠ ⁠Vocabulary 3.⁠Readability/Grammar 4.⁠ ⁠Task Fulfillment. " +
      req.body.essay +
      ". Give me only the result in object format";
    const i = req.body.index;
    console.log(essay);

    const response = await client2.responses.create({
      model: "gpt-5-nano",
      input: essay,
    });

    const data = response.output_text;
    const parsedData = JSON.parse(data);
    console.log(parsedData);

    const totalScore =
      parsedData["Content/Coherence"] +
      parsedData["Vocabulary"] +
      parsedData["Readability/Grammar"] +
      parsedData["Task Fulfillment"];
    const score = totalScore / 4;
    user.testResults.writing.scores_array[i] = score;
    console.log(score);
    user.save();
    res
      .status(StatusCodes.OK)
      .json({ message: "User listening score saved successful" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: error.message });
  }
};
