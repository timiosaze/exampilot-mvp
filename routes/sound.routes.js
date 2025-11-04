import express from "express";
import { AddSound } from "../controllers/sound.controller.js";
import multer from "multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/addsound", upload.single("sound"), AddSound);

export default router;
