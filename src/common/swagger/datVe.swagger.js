export const datVeSwagger = {
  "/QuanLyDatVe/DatVe": {
    post: {
      tags: ["QuanLyDatVe"],
      summary: "Đặt vé",
      description: "Đặt ghế cho một suất chiếu.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ma_lich_chieu: {
                  type: "integer",
                  example: 1,
                },
                ma_ghe: {
                  type: "integer",
                  example: 5,
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Đặt vé thành công",
        },
        400: {
          description: "Đặt vé thất bại",
        },
      },
    },
  },

  "/QuanLyDatVe/LayDanhSachPhongVe/{ma_lich_chieu}": {
    get: {
      tags: ["QuanLyDatVe"],
      summary: "Lấy danh sách phòng vé",
      description:
        "Lấy thông tin lịch chiếu, phim, rạp và danh sách ghế của suất chiếu.",
      parameters: [
        {
          name: "ma_lich_chieu",
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
          description: "Lấy danh sách phòng vé thành công",
        },
      },
    },
  },

  "/QuanLyDatVe/TaoLichChieu": {
    post: {
      tags: ["QuanLyDatVe"],
      summary: "Tạo lịch chiếu",
      description: "Tạo một lịch chiếu mới.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ma_rap: {
                  type: "integer",
                  example: 1,
                },
                ma_phim: {
                  type: "integer",
                  example: 1,
                },
                ngay_gio_chieu: {
                  type: "string",
                  format: "date-time",
                  example: "2026-08-25T19:30:00",
                },
                gia_ve: {
                  type: "integer",
                  example: 100000,
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Tạo lịch chiếu thành công",
        },
        400: {
          description: "Tạo lịch chiếu thất bại",
        },
      },
    },
  },
};
