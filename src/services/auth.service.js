import { BadRequestError } from "../common/helpers/exception.helper.js";

import {
  signAccessToken,
  signRefreshToken,
} from "../common/helpers/jwt.helper.js";

import { prisma } from "../common/prisma/connect.prisma.js";

import bcrypt from "bcrypt";

export const authService = {
  async login(req) {
    const { email, password } = req.body;

    const existingUser = await prisma.NguoiDung.findFirst({
      where: {
        email: email,
      },
      select: {
        tai_khoan: true,
        email: true,
        mat_khau: true,
        ho_ten: true,
        so_dt: true,
        loai_nguoi_dung: true,
      },
    });

    if (!existingUser) {
      throw new BadRequestError("Người dùng không tồn tại, vui lòng đăng ký");
    }

    const isPasswordValid = bcrypt.compareSync(password, existingUser.mat_khau);

    if (!isPasswordValid) {
      throw new BadRequestError(
        "Thông tin người dùng không đúng, vui lòng thử lại",
      );
    }

    const payload = {
      tai_khoan: existingUser.tai_khoan,
      email: existingUser.email,
    };

    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken(payload);

    return {
      accessToken,
      refreshToken,
    };
  },

  async register(req) {
    const { email, password, ho_ten, so_dt } = req.body;

    const existingUser = await prisma.NguoiDung.findFirst({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new BadRequestError("Người dùng đã tồn tại, vui lòng đăng nhập");
    }

    const hashPassword = bcrypt.hashSync(password, 10);

    await prisma.NguoiDung.create({
      data: {
        email: email,
        mat_khau: hashPassword,
        ho_ten: ho_ten,
        so_dt: so_dt,
      },
    });

    return true;
  },
};
