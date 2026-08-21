import express from "express";

import { rapController } from "../controllers/rap.controller.js";

const rapRouter = express.Router();

rapRouter.get("/LayThongTinHeThongRap", rapController.LayThongTinHeThongRap);

rapRouter.get(
  "/LayThongTinCupRamTheoHeThong/:ma_he_thong_rap",
  rapController.LayThongTinCupRamTheoHeThong,
);

rapRouter.get(
  "/LayThongTinLichChieuTheoHeThong/:ma_he_thong_rap",
  rapController.LayThongTinLichChieuTheoHeThong,
);

rapRouter.get("/LayThongTinLichChieu", rapController.LayThongTinLichChieu);

export default rapRouter;
