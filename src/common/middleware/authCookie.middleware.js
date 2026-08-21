import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";
import { prisma } from "../prisma/connect.prisma.js";

export const authCookie = async (req, res, next) => {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    throw new UnauthorizedError("Không có token");
  }

  const decode = verifyAccessToken(accessToken);

  const userExits = await prisma.nguoi_dung.findFirst({
    where: {
      id: decode.tai_khoan,
    },
  });

  if (!userExits) {
    throw new UnauthorizedError("Người dùng không tồn tại");
  }

  req.user = userExits;

  next();
};
