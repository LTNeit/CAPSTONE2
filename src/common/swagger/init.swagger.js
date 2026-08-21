import { authSwagger } from "./auth.swagger.js";
import { phimSwagger } from "./phim.swagger.js";
import { rapSwagger } from "./rap.swagger.js";
import { datVeSwagger } from "./datVe.swagger.js";
import { nguoiDungSwagger } from "./nguoiDung.swagger.js";

export const swaggerDocument = {
  openapi: "3.0.4",

  info: {
    title: "Quan Ly Phim API",
    description: "API quản lý phim, rạp, người dùng và đặt vé",
    version: "1.0.0",
  },

  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local dev server",
    },
  ],

  paths: {
    ...authSwagger,
    ...phimSwagger,
    ...rapSwagger,
    ...datVeSwagger,
    ...nguoiDungSwagger,
  },
};
