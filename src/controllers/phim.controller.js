import { responseSuccess } from "../common/helpers/response.helper.js";
import { phimService } from "../services/phim.service.js";

export const phimController = {
  async getDanhSachBanner(req, res, next) {
    try {
      const result = await phimService.getDanhSachBanner(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách banner thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async getDanhSachPhim(req, res, next) {
    try {
      const result = await phimService.getDanhSachPhim(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách phim thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async getDanhSachPhimTheoNgay(req, res, next) {
    try {
      const result =
        await phimService.getDanhSachPhimTheoNgay(req);

      const response = responseSuccess(
        result,
        "Lấy danh sách phim theo ngày thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async themPhim(req, res, next) {
    try {
      const result = await phimService.themPhim(req);

      const response = responseSuccess(
        result,
        "Thêm phim thành công",
      );

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },

  async themPhimUploadHinh(req, res, next) {
    try {
      const result =
        await phimService.themPhimUploadHinh(req);

      const response = responseSuccess(
        result,
        "Thêm phim và upload hình thành công",
      );

      res.status(201).json(response);
    } catch (error) {
      next(error);
    }
  },

  async capNhatPhimUpload(req, res, next) {
    try {
      const result =
        await phimService.capNhatPhimUpload(req);

      const response = responseSuccess(
        result,
        "Cập nhật phim thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async xoaPhim(req, res, next) {
    try {
      await phimService.xoaPhim(req);

      const response = responseSuccess(
        null,
        "Xóa phim thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async xp(req, res, next) {
    try {
      await phimService.xp(req);

      const response = responseSuccess(
        null,
        "Xóa phim thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },

  async getThongTinPhim(req, res, next) {
    try {
      const result =
        await phimService.getThongTinPhim(req);

      const response = responseSuccess(
        result,
        "Lấy thông tin phim thành công",
      );

      res.status(response.statusCode).json(response);
    } catch (error) {
      next(error);
    }
  },
};