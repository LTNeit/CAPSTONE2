import { authSwagger } from "./auth.swagger.js";
import { quanLyPhimSwagger } from "./phim.swagger.js";
import { quanLyRapSwagger } from "./rap.swagger.js";
import { datVeSwagger } from "./datVe.swagger.js";
import { quanLyNguoiDungSwagger } from "./nguoiDung.swagger.js";

export const swaggerDocument = {
  openapi: "3.0.4",

  info: {
    title: "Quan Ly Phim API",
    description: "API quản lý phim, rạp, người dùng và đặt vé",
    version: "1.0.0",
  },

  servers: [
    {
      url: "http://localhost:3069/api",
      description: "Local dev server",
    },
  ],

  paths: {
    ...authSwagger,
    ...quanLyPhimSwagger,
    ...quanLyRapSwagger,
    ...datVeSwagger,
    ...quanLyNguoiDungSwagger,
  },
};
