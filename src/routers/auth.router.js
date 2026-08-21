import express from "express";

import { authController } from "../controllers/auth.controller.js";

import { authCookie } from "../common/middleware/authCookie.middleware.js";

const authRouter = express.Router();

authRouter.post("/login", authController.login);

authRouter.post("/register", authController.register);

export default authRouter;
