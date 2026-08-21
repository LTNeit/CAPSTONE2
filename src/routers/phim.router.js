import express from "express";

import { phimController } from "../controllers/phim.controller.js";
import { authCookie } from "../common/middleware/authCookie.middleware.js";
import { uploadDiskStorage } from "../common/multer/disk-storage.multer.js";

const phimRouter = express.Router();

phimRouter.get("/LayDanhSachPhim", phimController.LayDanhSachPhim);

phimRouter.get(
  "/LayDanhSachPhimTheoNgay",
  phimController.LayDanhSachPhimTheoNgay,
);

phimRouter.get("/LayDanhSachBanner", phimController.LayDanhSachBanner);

phimRouter.post(
  "/ThemPhimUploadHinh",
  authCookie,
  uploadDiskStorage.single("hinh_anh"),
  phimController.ThemPhimUploadHinh,
);

phimRouter.put(
  "/CapNhatPhimUploadHinh/:ma_phim",
  authCookie,
  uploadDiskStorage.single("hinh_anh"),
  phimController.CapNhatPhimUploadHinh,
);

phimRouter.get("/LayThongTinPhim/:ma_phim", phimController.LayThongTinPhim);

phimRouter.delete("/XoaPhim/:ma_phim", authCookie, phimController.XoaPhim);

export default phimRouter;
