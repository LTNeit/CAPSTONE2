import { prisma } from "../common/prisma/connect.prisma.js";

export const nguoiDungService = {
  async LayDanhSachNguoiDung(req) {
    const { page, pageSize, index, where } = buildQueryPrismaHelper(req);

    const res = await prisma.NguoiDung.findMany({
      where: where,
      skip: index,
      take: pageSize,
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });

    const totalItems = await prisma.NguoiDung.count({
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

  async LayThongTinNguoiDung(req) {
    const { tai_khoan } = req.params;

    return await prisma.NguoiDung.findUnique({
      where: {
        tai_khoan: Number(tai_khoan),
      },
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  async LayThongTinCaNhan(req) {
    const taiKhoan = req.user?.tai_khoan;

    return await prisma.NguoiDung.findUnique({
      where: {
        tai_khoan: Number(taiKhoan),
      },
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  async TimKiemNguoiDung(req) {
    const { page, pageSize, index } = buildQueryPrismaHelper(req);

    const { tu_khoa } = req.query;

    const where = {
      OR: [
        {
          ho_ten: {
            contains: tu_khoa,
          },
        },
        {
          email: {
            contains: tu_khoa,
          },
        },
        {
          so_dt: {
            contains: tu_khoa,
          },
        },
      ],
    };

    const res = await prisma.NguoiDung.findMany({
      where: where,
      skip: index,
      take: pageSize,
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });

    const totalItems = await prisma.NguoiDung.count({
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

  async ThemNguoiDung(req) {
    const { email, password, ho_ten, so_dt, loai_nguoi_dung } = req.body;

    const hashPassword = bcrypt.hashSync(password, 10);

    return await prisma.NguoiDung.create({
      data: {
        email: email,
        mat_khau: hashPassword,
        ho_ten: ho_ten,
        so_dt: so_dt,
        loai_nguoi_dung: loai_nguoi_dung,
      },
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  async CapNhatThongTin(req) {
    const { tai_khoan } = req.params;

    const { ho_ten, email, so_dt, loai_nguoi_dung } = req.body;

    return await prisma.NguoiDung.update({
      where: {
        tai_khoan: Number(tai_khoan),
      },
      data: {
        ho_ten: ho_ten,
        email: email,
        so_dt: so_dt,
        loai_nguoi_dung: loai_nguoi_dung,
      },
      select: {
        tai_khoan: true,
        ho_ten: true,
        email: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });
  },

  async XoaNguoiDUng(req) {
    const { tai_khoan } = req.params;

    await prisma.NguoiDung.delete({
      where: {
        tai_khoan: Number(tai_khoan),
      },
    });

    return null;
  },
};
