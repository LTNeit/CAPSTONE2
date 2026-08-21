import express from "express";

import { nguoiDungController } from "../controllers/nguoiDung.controller.js";

import { authCookie } from "../common/middleware/authCookie.middleware.js";

const nguoiDungRouter = express.Router();

nguoiDungRouter.get(
  "/LayDanhSachNguoiDung",
  authCookie,
  nguoiDungController.LayDanhSachNguoiDung,
);

nguoiDungRouter.get(
  "/LayThongTinNguoiDung/:tai_khoan",
  authCookie,
  nguoiDungController.LayThongTinNguoiDung,
);

nguoiDungRouter.get(
  "/LayThongTinCaNhan",
  authCookie,
  nguoiDungController.LayThongTinCaNhan,
);

nguoiDungRouter.get(
  "/TimKiemNguoiDung",
  authCookie,
  nguoiDungController.TimKiemNguoiDung,
);

nguoiDungRouter.post(
  "/ThemNguoiDung",
  authCookie,
  nguoiDungController.ThemNguoiDung,
);

nguoiDungRouter.put(
  "/CapNhatThongTin/:tai_khoan",
  authCookie,
  nguoiDungController.CapNhatThongTin,
);

nguoiDungRouter.delete(
  "/XoaNguoiDUng/:tai_khoan",
  authCookie,
  nguoiDungController.XoaNguoiDUng,
);

export default nguoiDungRouter;
