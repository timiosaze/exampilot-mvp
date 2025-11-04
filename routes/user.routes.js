import express from "express";
import { getCurrentUser } from "../controllers/user.controller.js";
import { authenticateUser } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/current-user", authenticateUser, getCurrentUser);

export default router;
