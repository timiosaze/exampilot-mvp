import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// public
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import connectMongoDB from "./db/connectMongoDB.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import sectionRoutes from "./routes/section.routes.js";
import soundRoutes from "./routes/sound.routes.js";
// import { Configuration, OpenAIApi } from "openai";   --- IGNORE ---
import cors from "cors";
import { AddSound } from "./controllers/sound.controller.js";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
import { readFile } from "node:fs";
import Listening from "./models/listening.model.js";
import Reading from "./models/reading.model.js";
import Writing from "./models/writing.model.js";
import bodyParser from "body-parser";
import Speaking from "./models/speaking.model.js";
// const router = express.Router();

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" })); // Adjust as needed
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

const __dirname = dirname(fileURLToPath(import.meta.url)); // ESM module fix
// console.log(__dirname);
app.use(express.static(path.resolve(__dirname, "./public"))); // Serve static files from the "public" directory

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/section", sectionRoutes);
// app.use("/api/upload", soundRoutes);
// app.post("/api/upload/addsound", upload.single("file"), async (req, res) => {
//   writeFile("umlilo.mp3", req.file.buffer, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
// });

// app.post("/save");

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// const save = () => {
//   readFile("test2.json", (err, data) => {
//     if (err) throw err;
//     const obj = JSON.parse(data);
//     const reading = new Reading();
//     reading.name = obj.name;
//     reading.sectionA.passage = obj.sectionA.passage;
//     reading.sectionA.passage_questions.push(...obj.sectionA.passage_questions);
//     reading.sectionA.letter = obj.sectionA.letter;
//     reading.sectionA.letter_questions.push(...obj.sectionA.letter_questions);
//     reading.sectionB.email = obj.sectionB.email;
//     reading.sectionB.email_questions.push(...obj.sectionB.email_questions);
//     reading.sectionB.other_questions.push(...obj.sectionB.other_questions);
//     reading.sectionC.passage = obj.sectionC.passage;
//     reading.sectionC.options.push(...obj.sectionC.options);
//     reading.sectionC.passage_questions.push(...obj.sectionC.passage_questions);
//     reading.sectionD.article_paragraphs.push(
//       ...obj.sectionD.article_paragraphs
//     );
//     reading.sectionD.article_questions.push(...obj.sectionD.article_questions);
//     reading.sectionD.letter = obj.sectionD.letter;
//     reading.sectionD.letter_questions.push(...obj.sectionD.letter_questions);
//     try {
//       reading.save();
//       console.log("save to reading collection");
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

// const save = () => {
//   readFile("test3.json", (err, data) => {
//     if (err) throw err;
//     const obj = JSON.parse(data);
//     const writing = new Writing();
//     writing.name = obj.name;
//     writing.email_question = obj.email_question;
//     writing.email_essay = obj.email_essay;
//     writing.email_info.push(...obj.email_info);
//     writing.survey_question = obj.survey_question;
//     writing.survey_essay_title = obj.survey_essay_title;
//     writing.survey_essay_body = obj.survey_essay_body;
//     writing.survey_options.push(...obj.survey_options);
//     try {
//       writing.save();
//       console.log("save to writing collection");
//     } catch (error) {
//       console.log(error.message);
//     }
//   });
// };

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  const status = err.statusCode || err.status || 500;

  // If your custom errors carry an array of messages (like from express-validator),
  // send the first one as the top-level msg to match your desired shape.
  const msg = Array.isArray(err.messages)
    ? err.messages[0]
    : err.message || "Something went wrong";

  // Always return JSON — no HTML
  res.status(status).json({ msg });
});

app.listen(PORT, () => {
  connectMongoDB();
  // save();
  console.log(`Server is running on http://localhost:${PORT}`);
});
