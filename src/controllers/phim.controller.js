import { responseSuccess } from "../common/helpers/response.helper.js";
import { phimService } from "../services/phim.service.js";

export const phimController = {
  async LayDanhSachPhim(req, res, next) {
    try {
      const result = await phimService.LayDanhSachPhim(req);

      const response = responseSuccess(result, "Lấy danh sách phim thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async LayDanhSachPhimTheoNgay(req, res, next) {
    try {
      const result = await phimService.LayDanhSachPhimTheoNgay(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách phim theo ngày thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async LayDanhSachBanner(req, res, next) {
    try {
      const result = await phimService.LayDanhSachBanner(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách banner thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async ThemPhimUploadHinh(req, res, next) {
    try {
      const result = await phimService.ThemPhimUploadHinh(req);

      const response = responseSuccess(result, "Thêm phim thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async CapNhatPhimUploadHinh(req, res, next) {
    try {
      const result = await phimService.CapNhatPhimUploadHinh(req);

      const response = responseSuccess(result, "Cập nhật phim thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async LayThongTinPhim(req, res, next) {
    try {
      const result = await phimService.LayThongTinPhim(req);

      const response = responseSuccess(result, "Lấy thông tin phim thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async XoaPhim(req, res, next) {
    try {
      const result = await phimService.XoaPhim(req);

      const response = responseSuccess(result, "Xóa phim thành công");

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};
