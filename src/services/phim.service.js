import { prisma } from "../common/prisma/connect.prisma.js";
import { BadRequestError } from "../common/helpers/exception.helper.js";
import { buildQueryPrismaHelper } from "../common/helpers/build-query-prisma.helper.js";
async function kiemTraAdmin(req) {
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
    throw new BadRequestError("Bạn không có quyền thực hiện chức năng này");
  }
}
export const phimService = {
  async LayDanhSachPhim(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const res = await prisma.Phim.findMany({
      where: where,
      skip: index,
      take: pageSize,
    });

    const totalItems = await prisma.Phim.count({
      where: where,
    });

    const totalPages = Math.ceil(totalItems / pageSize);

    return {
      items: res,
      totalItems: totalItems,
      totalPages: totalPages,
      page: page,
      pageSize: pageSize,
    };
  },

  async LayDanhSachPhimTheoNgay(req) {
    const { tu_ngay, den_ngay } = req.body;

    return await prisma.Phim.findMany({
      where: {
        ngay_khoi_chieu: {
          gte: new Date(tu_ngay),
          lte: new Date(den_ngay),
        },
      },
    });
  },

  async LayDanhSachBanner(req) {
    return await prisma.Banner.findMany({
      include: {
        Phim: true,
      },
    });
  },

  async ThemPhimUploadHinh(req) {
    await kiemTraAdmin(req);
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

    return await prisma.Phim.create({
      data: {
        ten_phim,
        trailer,
        hinh_anh: req.file?.filename,
        mo_ta,
        ngay_khoi_chieu: ngay_khoi_chieu ? new Date(ngay_khoi_chieu) : null,

        danh_gia: danh_gia ? Number(danh_gia) : null,

        hot: hot === "true",
        dang_chieu: dang_chieu === "true",
        sap_chieu: sap_chieu === "true",
      },
    });
  },

  async CapNhatPhimUploadHinh(req) {
    await kiemTraAdmin(req);
    const { ma_phim } = req.params;

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

    const data = {
      ten_phim,
      trailer,
      mo_ta,

      ngay_khoi_chieu: ngay_khoi_chieu ? new Date(ngay_khoi_chieu) : null,

      danh_gia: danh_gia ? Number(danh_gia) : null,

      hot: hot === "true",
      dang_chieu: dang_chieu === "true",
      sap_chieu: sap_chieu === "true",
    };

    if (req.file) {
      data.hinh_anh = req.file.filename;
    }

    return await prisma.Phim.update({
      where: {
        ma_phim: Number(ma_phim),
      },
      data,
    });
  },

  async LayThongTinPhim(req) {
    const { ma_phim } = req.params;

    return await prisma.Phim.findUnique({
      where: {
        ma_phim: Number(ma_phim),
      },
      include: {
        Banner: true,
        LichChieu: true,
      },
    });
  },

  async XoaPhim(req) {
    await kiemTraAdmin(req);
    const { ma_phim } = req.params;

    await prisma.Phim.delete({
      where: {
        ma_phim: Number(ma_phim),
      },
    });

    return null;
  },
};
