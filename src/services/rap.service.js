import { prisma } from "../common/prisma/connect.prisma.js";

export const rapService = {
  // 1. Lấy tất cả hệ thống rạp
  async LayThongTinHeThongRap(req) {
    return await prisma.HeThongRap.findMany({
      include: {
        CumRap: true,
      },
    });
  },

  // 2. Lấy cụm rạp theo hệ thống rạp
  async LayThongTinCupRamTheoHeThong(req) {
    const { ma_he_thong_rap } = req.params;

    return await prisma.CumRap.findMany({
      where: {
        ma_he_thong_rap: Number(ma_he_thong_rap),
      },
      include: {
        RapPhim: true,
      },
    });
  },

  // 3. Lấy lịch chiếu theo hệ thống rạp
  async LayThongTinLichChieuTheoHeThong(req) {
    const { ma_he_thong_rap } = req.params;

    return await prisma.LichChieu.findMany({
      where: {
        RapPhim: {
          CumRap: {
            ma_he_thong_rap: Number(ma_he_thong_rap),
          },
        },
      },
      include: {
        Phim: true,
        RapPhim: {
          include: {
            CumRap: true,
          },
        },
      },
      orderBy: {
        ngay_gio_chieu: "asc",
      },
    });
  },

  // 4. Lấy tất cả lịch chiếu
  async LayThongTinLichChieu(req) {
    return await prisma.LichChieu.findMany({
      include: {
        Phim: true,
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
      orderBy: {
        ngay_gio_chieu: "asc",
      },
    });
  },
};