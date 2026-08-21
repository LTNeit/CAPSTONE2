import express from "express";

import { datVeController } from "../controllers/datVe.controller.js";

import { authCookie } from "../common/middleware/authCookie.middleware.js";

const datVeRouter = express.Router();

datVeRouter.post("/DatVe", authCookie, datVeController.DatVe);

datVeRouter.get(
  "/LayDanhSachPhongVe/:ma_lich_chieu",
  datVeController.LayDanhSachPhongVe,
);

datVeRouter.post("/TaoLichChieu", authCookie, datVeController.TaoLichChieu);

export default datVeRouter;
