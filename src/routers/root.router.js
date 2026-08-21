import express from "express";

import authRouter from "./auth.router.js";
import nguoiDungRouter from "./nguoiDung.router.js";
import quanLyPhimRouter from "./phim.router.js";
import quanLyRapRouter from "./rap.router.js";
import datVeRouter from "./datVe.router.js";

const rootRouter = express.Router();

rootRouter.use("/auth", authRouter);

rootRouter.use("/QuanLyNguoiDung", nguoiDungRouter);

rootRouter.use("/QuanLyPhim", quanLyPhimRouter);

rootRouter.use("/QuanLyRap", quanLyRapRouter);

rootRouter.use("/QuanLyDatVe", datVeRouter);

export default rootRouter;
