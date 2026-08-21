import { responseSuccess } from "../common/helpers/response.helper.js";
import { datVeService } from "../services/datVe.service.js";

export const datVeController = {
  async DatVe(req, res, next) {
    try {
      const result = await datVeService.DatVe(req);

      const response = responseSuccess(result, "Đặt vé thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async LayDanhSachPhongVe(req, res, next) {
    try {
      const result = await datVeService.LayDanhSachPhongVe(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách phòng vé thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async TaoLichChieu(req, res, next) {
    try {
      const result = await datVeService.TaoLichChieu(req);

      const response = responseSuccess(result, "Tạo lịch chiếu thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
