import { responseSuccess } from "../common/helpers/response.helper.js";
import { rapService } from "../services/rap.service.js";

export const rapController = {
  // 1. Lấy tất cả hệ thống rạp
  async LayThongTinHeThongRap(req, res, next) {
    try {
      const result =
        await rapService.LayThongTinHeThongRap(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin hệ thống rạp thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 2. Lấy cụm rạp theo hệ thống rạp
  async LayThongTinCupRamTheoHeThong(req, res, next) {
    try {
      const result =
        await rapService.LayThongTinCupRamTheoHeThong(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin cụm rạp theo hệ thống thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 3. Lấy lịch chiếu theo hệ thống rạp
  async LayThongTinLichChieuTheoHeThong(req, res, next) {
    try {
      const result =
        await rapService.LayThongTinLichChieuTheoHeThong(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin lịch chiếu theo hệ thống thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  // 4. Lấy tất cả lịch chiếu
  async LayThongTinLichChieu(req, res, next) {
    try {
      const result =
        await rapService.LayThongTinLichChieu(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin lịch chiếu thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};