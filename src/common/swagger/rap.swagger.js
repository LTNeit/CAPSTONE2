export const rapSwagger = {
  "/QuanLyRap/LayThongTinHeThongRap": {
    get: {
      tags: ["QuanLyRap"],
      summary: "Lấy thông tin hệ thống rạp",
      description: "Lấy tất cả hệ thống rạp.",
      responses: {
        200: {
          description: "Lấy thông tin hệ thống rạp thành công",
        },
      },
    },
  },

  "/QuanLyRap/LayThongTinCupRamTheoHeThong/{ma_he_thong_rap}": {
    get: {
      tags: ["QuanLyRap"],
      summary: "Lấy cụm rạp theo hệ thống",
      description: "Lấy danh sách cụm rạp thuộc một hệ thống rạp.",
      parameters: [
        {
          name: "ma_he_thong_rap",
          in: "path",
          required: true,
          schema: {
            type: "integer",
          },
          example: 1,
        },
      ],
      responses: {
        200: {
          description: "Lấy cụm rạp thành công",
        },
      },
    },
  },

  "/QuanLyRap/LayThongTinLichChieuTheoHeThong/{ma_he_thong_rap}": {
    get: {
      tags: ["QuanLyRap"],
      summary: "Lấy lịch chiếu theo hệ thống rạp",
      description: "Lấy danh sách lịch chiếu thuộc một hệ thống rạp.",
      parameters: [
        {
          name: "ma_he_thong_rap",
          in: "path",
          required: true,
          schema: {
            type: "integer",
          },
          example: 1,
        },
      ],
      responses: {
        200: {
          description: "Lấy lịch chiếu theo hệ thống rạp thành công",
        },
      },
    },
  },

  "/QuanLyRap/LayThongTinLichChieu": {
    get: {
      tags: ["QuanLyRap"],
      summary: "Lấy tất cả lịch chiếu",
      description: "Lấy danh sách tất cả lịch chiếu.",
      responses: {
        200: {
          description: "Lấy tất cả lịch chiếu thành công",
        },
      },
    },
  },
};
