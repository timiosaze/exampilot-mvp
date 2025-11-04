import express from "express";
import {
  getAllListening,
  getAllReading,
  getAllSpeaking,
  getAllWriting,
  saveSingleSpeech,
  saveListeningScore,
  saveReadingScore,
  saveWritingScore,
} from "../controllers/section.controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/listening", getAllListening);
router.get("/reading", getAllReading);
router.get("/writing", getAllWriting);
router.post("/speech", authenticateUser, saveSingleSpeech);
router.get("/speaking", getAllSpeaking);
router.post("/listening_score", authenticateUser, saveListeningScore);
router.post("/reading_score", authenticateUser, saveReadingScore);
router.post("/writing_score", authenticateUser, saveWritingScore);
export default router;
