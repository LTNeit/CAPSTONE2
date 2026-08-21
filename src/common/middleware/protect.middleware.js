import { UnauthorizedError } from "../helpers/exception.helper.js";
import { verifyAccessToken } from "../helpers/jwt.helper.js";

export const protectMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthorizedError("Vui lòng đăng nhập để tiếp tục");
  }

  const accessToken = authHeader.split(" ")[1];

  const decoded = verifyAccessToken(accessToken, { ignoreExpiration: true });

  req.accessToken = accessToken;
  next();
};
