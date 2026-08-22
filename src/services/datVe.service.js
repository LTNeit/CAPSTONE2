import { prisma } from "../common/prisma/connect.prisma.js";

export const datVeService = {
  async DatVe(req) {
    const taiKhoan = req.user?.tai_khoan;

    const { ma_lich_chieu, ma_ghe } = req.body;

    return await prisma.DatVe.create({
      data: {
        tai_khoan: Number(taiKhoan),
        ma_lich_chieu: Number(ma_lich_chieu),
        ma_ghe: Number(ma_ghe),
      },
    });
  },

  async LayDanhSachPhongVe(req) {
    const { ma_lich_chieu } = req.params;

    const lichChieu = await prisma.LichChieu.findUnique({
      where: {
        ma_lich_chieu: Number(ma_lich_chieu),
      },
      include: {
        Phim: true,
        RapPhim: {
          include: {
            CumRap: {
              include: {
                HeThongRap: true,
              },
            },
            Ghe: {
              include: {
                DatVe: true,
              },
            },
          },
        },
      },
    });

    return lichChieu;
  },

  async TaoLichChieu(req) {
    const taiKhoan = req.user?.tai_khoan;

    const nguoiDung = await prisma.NguoiDung.findUnique({
      where: {
        tai_khoan: Number(taiKhoan),
      },
      select: {
        loai_nguoi_dung: true,
      },
    });

    if (!nguoiDung || nguoiDung.loai_nguoi_dung !== "Admin") {
      throw new BadRequestError("Bạn không có quyền tạo lịch chiếu");
    }

    const { ma_rap, ma_phim, ngay_gio_chieu, gia_ve } = req.body;

    return await prisma.LichChieu.create({
      data: {
        ma_rap: Number(ma_rap),
        ma_phim: Number(ma_phim),
        ngay_gio_chieu: new Date(ngay_gio_chieu),
        gia_ve: Number(gia_ve),
      },
    });
  },
};
