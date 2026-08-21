import { responseSuccess } from "../common/helpers/response.helper.js";
import { nguoiDungService } from "../services/nguoiDung.service.js";

export const nguoiDungController = {
  
  async LayDanhSachNguoiDung(req, res, next) {
    try {
      const result =
        await nguoiDungService.LayDanhSachNguoiDung(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách người dùng thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async LayThongTinNguoiDung(req, res, next) {
    try {
      const result =
        await nguoiDungService.LayThongTinNguoiDung(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin người dùng thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async LayThongTinCaNhan(req, res, next) {
    try {
      const result =
        await nguoiDungService.LayThongTinCaNhan(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin cá nhân thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async TimKiemNguoiDung(req, res, next) {
    try {
      const result =
        await nguoiDungService.TimKiemNguoiDung(req);

      const response = responseSuccess(
        result,
        "Tìm kiếm người dùng thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async ThemNguoiDung(req, res, next) {
    try {
      const result =
        await nguoiDungService.ThemNguoiDung(req);

      const response = responseSuccess(
        result,
        "Thêm người dùng thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async CapNhatThongTin(req, res, next) {
    try {
      const result =
        await nguoiDungService.CapNhatThongTin(req);

      const response = responseSuccess(
        result,
        "Cập nhật thông tin thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  
  async XoaNguoiDUng(req, res, next) {
    try {
      await nguoiDungService.XoaNguoiDUng(req);

      const response = responseSuccess(
        null,
        "Xóa người dùng thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};