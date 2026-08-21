export const phimSwagger = {
  "/QuanLyPhim/LayDanhSachPhim": {
    get: {
      tags: ["QuanLyPhim"],
      summary: "Lấy danh sách phim",
      description: "Lấy danh sách tất cả phim.",
      responses: {
        200: {
          description: "Lấy danh sách phim thành công",
        },
      },
    },
  },

  "/QuanLyPhim/LayDanhSachPhimTheoNgay": {
    get: {
      tags: ["QuanLyPhim"],
      summary: "Lấy danh sách phim theo ngày",
      description: "Lấy danh sách phim theo ngày khởi chiếu.",
      parameters: [
        {
          name: "tu_ngay",
          in: "query",
          required: true,
          schema: {
            type: "string",
            format: "date",
          },
          example: "2026-08-01",
        },
        {
          name: "den_ngay",
          in: "query",
          required: true,
          schema: {
            type: "string",
            format: "date",
          },
          example: "2026-08-31",
        },
      ],
      responses: {
        200: {
          description: "Lấy danh sách phim theo ngày thành công",
        },
      },
    },
  },

  "/QuanLyPhim/LayDanhSachBanner": {
    get: {
      tags: ["QuanLyPhim"],
      summary: "Lấy danh sách banner",
      description: "Lấy danh sách banner của phim.",
      responses: {
        200: {
          description: "Lấy danh sách banner thành công",
        },
      },
    },
  },

  "/QuanLyPhim/ThemPhimUploadHinh": {
    post: {
      tags: ["QuanLyPhim"],
      summary: "Thêm phim và upload hình",
      description: "Thêm phim mới và upload hình ảnh phim.",
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                ten_phim: {
                  type: "string",
                  example: "Avengers: Endgame",
                },
                trailer: {
                  type: "string",
                  example: "https://youtube.com/watch?v=example",
                },
                hinh_anh: {
                  type: "string",
                  format: "binary",
                },
                mo_ta: {
                  type: "string",
                  example: "Nội dung mô tả phim",
                },
                ngay_khoi_chieu: {
                  type: "string",
                  format: "date",
                  example: "2026-08-20",
                },
                danh_gia: {
                  type: "integer",
                  example: 5,
                },
                hot: {
                  type: "boolean",
                  example: true,
                },
                dang_chieu: {
                  type: "boolean",
                  example: true,
                },
                sap_chieu: {
                  type: "boolean",
                  example: false,
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Thêm phim thành công",
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },

  "/QuanLyPhim/CapNhatPhimUploadHinh/{ma_phim}": {
    put: {
      tags: ["QuanLyPhim"],
      summary: "Cập nhật phim và upload hình",
      description: "Cập nhật thông tin phim và hình ảnh phim.",
      parameters: [
        {
          name: "ma_phim",
          in: "path",
          required: true,
          schema: {
            type: "integer",
          },
          example: 1,
        },
      ],
      requestBody: {
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              type: "object",
              properties: {
                ten_phim: {
                  type: "string",
                  example: "Avengers: Endgame",
                },
                trailer: {
                  type: "string",
                  example: "https://youtube.com/watch?v=example",
                },
                hinh_anh: {
                  type: "string",
                  format: "binary",
                },
                mo_ta: {
                  type: "string",
                  example: "Nội dung mô tả phim",
                },
                ngay_khoi_chieu: {
                  type: "string",
                  format: "date",
                  example: "2026-08-20",
                },
                danh_gia: {
                  type: "integer",
                  example: 5,
                },
                hot: {
                  type: "boolean",
                  example: true,
                },
                dang_chieu: {
                  type: "boolean",
                  example: true,
                },
                sap_chieu: {
                  type: "boolean",
                  example: false,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật phim thành công",
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },

  "/QuanLyPhim/LayThongTinPhim/{ma_phim}": {
    get: {
      tags: ["QuanLyPhim"],
      summary: "Lấy thông tin phim",
      description: "Lấy thông tin chi tiết của một bộ phim.",
      parameters: [
        {
          name: "ma_phim",
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
          description: "Lấy thông tin phim thành công",
        },
      },
    },
  },

  "/QuanLyPhim/XoaPhim/{ma_phim}": {
    delete: {
      tags: ["QuanLyPhim"],
      summary: "Xóa phim",
      description: "Xóa một bộ phim.",
      parameters: [
        {
          name: "ma_phim",
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
          description: "Xóa phim thành công",
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },
};
