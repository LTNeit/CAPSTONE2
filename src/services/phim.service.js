import path from "path";
import fs from "fs";

import { BadRequestError } from "../common/helpers/exception.helper.js";
import { prisma } from "../common/prisma/connect.prisma.js";

export const phimService = {
  // =====================================================
  // GET /api/QuanLyPhim/LayDanhSachBanner
  // =====================================================

  async getDanhSachBanner(req) {
    const banners = await prisma.banner.findMany({
      include: {
        Phim: true,
      },
    });

    return banners;
  },

  // =====================================================
  // GET /api/QuanLyPhim/LayDanhSachPhim
  // =====================================================

  async LayDanhSachPhim(req) {
    const phim = await prisma.phim.findMany({
      orderBy: {
        ma_phim: "desc",
      },
    });

    return phim;
  },

  // =====================================================
  // GET /api/QuanLyPhim/LayDanhSachPhimTheoNgay
  // =====================================================

  async LayDanhSachPhimTheoNgay(req) {
    const {
      tuNgay,
      denNgay,
    } = req.query;

    const where = {};

    if (tuNgay || denNgay) {
      where.ngay_khoi_chieu = {};

      if (tuNgay) {
        where.ngay_khoi_chieu.gte = new Date(tuNgay);
      }

      if (denNgay) {
        where.ngay_khoi_chieu.lte = new Date(denNgay);
      }
    }

    const phim = await prisma.phim.findMany({
      where,
      orderBy: {
        ngay_khoi_chieu: "asc",
      },
    });

    return phim;
  },

  // =====================================================
  // POST /api/QuanLyPhim
  // =====================================================

  async themPhim(req) {
    const {
      ten_phim,
      trailer,
      hinh_anh,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = req.body;

    if (!ten_phim) {
      throw new BadRequestError("Vui lòng cung cấp tên phim");
    }

    const phim = await prisma.phim.create({
      data: {
        ten_phim,
        trailer,
        hinh_anh,
        mo_ta,
        ngay_khoi_chieu: ngay_khoi_chieu
          ? new Date(ngay_khoi_chieu)
          : undefined,
        danh_gia: danh_gia !== undefined
          ? Number(danh_gia)
          : undefined,
        hot: hot !== undefined
          ? Boolean(hot)
          : undefined,
        dang_chieu: dang_chieu !== undefined
          ? Boolean(dang_chieu)
          : undefined,
        sap_chieu: sap_chieu !== undefined
          ? Boolean(sap_chieu)
          : undefined,
      },
    });

    return phim;
  },

  // =====================================================
  // POST /api/QuanLyPhim/ThemPhimUploadHinh
  // =====================================================

  async themPhimUploadHinh(req) {
    if (!req.file) {
      throw new BadRequestError("Vui lòng cung cấp hình ảnh");
    }

    const {
      ten_phim,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = req.body;

    if (!ten_phim) {
      throw new BadRequestError("Vui lòng cung cấp tên phim");
    }

    const phim = await prisma.phim.create({
      data: {
        ten_phim,
        trailer,
        hinh_anh: req.file.filename,
        mo_ta,
        ngay_khoi_chieu: ngay_khoi_chieu
          ? new Date(ngay_khoi_chieu)
          : undefined,
        danh_gia: danh_gia !== undefined
          ? Number(danh_gia)
          : undefined,
        hot: hot !== undefined
          ? hot === "true" || hot === "1"
          : undefined,
        dang_chieu: dang_chieu !== undefined
          ? dang_chieu === "true" || dang_chieu === "1"
          : undefined,
        sap_chieu: sap_chieu !== undefined
          ? sap_chieu === "true" || sap_chieu === "1"
          : undefined,
      },
    });

    return phim;
  },

  // =====================================================
  // POST /api/QuanLyPhim/CapNhatPhimUpload
  // =====================================================

  async capNhatPhimUpload(req) {
    const {
      ma_phim,
      ten_phim,
      trailer,
      mo_ta,
      ngay_khoi_chieu,
      danh_gia,
      hot,
      dang_chieu,
      sap_chieu,
    } = req.body;

    if (!ma_phim) {
      throw new BadRequestError("Vui lòng cung cấp mã phim");
    }

    const phim = await prisma.phim.findUnique({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    if (!phim) {
      throw new BadRequestError("Không tìm thấy phim");
    }

    let hinhAnh = phim.hinh_anh;

    if (req.file) {
      if (phim.hinh_anh) {
        const oldFilePath = path.join(
          "public/images",
          phim.hinh_anh,
        );

        if (fs.existsSync(oldFilePath)) {
          fs.unlinkSync(oldFilePath);
        }
      }

      hinhAnh = req.file.filename;
    }

    const updatedPhim = await prisma.phim.update({
      where: {
        ma_phim: Number(ma_phim),
      },

      data: {
        ten_phim,
        trailer,
        hinh_anh: hinhAnh,
        mo_ta,

        ngay_khoi_chieu: ngay_khoi_chieu
          ? new Date(ngay_khoi_chieu)
          : undefined,

        danh_gia: danh_gia !== undefined
          ? Number(danh_gia)
          : undefined,

        hot: hot !== undefined
          ? hot === "true" || hot === "1"
          : undefined,

        dang_chieu: dang_chieu !== undefined
          ? dang_chieu === "true" || dang_chieu === "1"
          : undefined,

        sap_chieu: sap_chieu !== undefined
          ? sap_chieu === "true" || sap_chieu === "1"
          : undefined,
      },
    });

    return updatedPhim;
  },

  // =====================================================
  // DELETE /api/QuanLyPhim/XoaPhim
  // =====================================================

  async xoaPhim(req) {
    const { ma_phim } = req.body;

    if (!ma_phim) {
      throw new BadRequestError("Vui lòng cung cấp mã phim");
    }

    const phim = await prisma.phim.findUnique({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    if (!phim) {
      throw new BadRequestError("Không tìm thấy phim");
    }

    if (phim.hinh_anh) {
      const filePath = path.join(
        "public/images",
        phim.hinh_anh,
      );

      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    }

    await prisma.phim.delete({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    return null;
  },

  // =====================================================
  // DELETE /api/QuanLyPhim/XP
  // =====================================================

  async xp(req) {
    const { ma_phim } = req.body;

    if (!ma_phim) {
      throw new BadRequestError("Vui lòng cung cấp mã phim");
    }

    const phim = await prisma.phim.findUnique({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    if (!phim) {
      throw new BadRequestError("Không tìm thấy phim");
    }

    await prisma.phim.delete({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    return null;
  },

  // =====================================================
  // GET /api/QuanLyPhim/LayThongTinPhim
  // =====================================================

  async getThongTinPhim(req) {
    const {
      maPhim,
      ma_phim,
    } = req.query;

    const phimId = maPhim ?? ma_phim;

    if (!phimId) {
      throw new BadRequestError("Vui lòng cung cấp mã phim");
    }

    const phim = await prisma.phim.findUnique({
      where: {
        ma_phim: Number(phimId),
      },

      include: {
        Banner: true,

        LichChieu: {
          include: {
            RapPhim: {
              include: {
                CumRap: {
                  include: {
                    HeThongRap: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    if (!phim) {
      throw new BadRequestError("Không tìm thấy phim");
    }

    return phim;
  },
};