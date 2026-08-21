export const nguoiDungSwagger = {
  "/QuanLyNguoiDung/LayDanhSachNguoiDung": {
    get: {
      tags: ["QuanLyNguoiDung"],
      summary: "Lấy danh sách người dùng",
      description: "Lấy danh sách tất cả người dùng.",
      responses: {
        200: {
          description: "Lấy danh sách người dùng thành công",
        },
      },
    },
  },

  "/QuanLyNguoiDung/LayThongTinNguoiDung/{tai_khoan}": {
    get: {
      tags: ["QuanLyNguoiDung"],
      summary: "Lấy thông tin người dùng",
      description: "Lấy thông tin chi tiết của một người dùng.",
      parameters: [
        {
          name: "tai_khoan",
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
          description: "Lấy thông tin người dùng thành công",
        },
      },
    },
  },

  "/QuanLyNguoiDung/LayThongTinCaNhan": {
    get: {
      tags: ["QuanLyNguoiDung"],
      summary: "Lấy thông tin cá nhân",
      description: "Lấy thông tin của chính người dùng đang đăng nhập.",
      responses: {
        200: {
          description: "Lấy thông tin cá nhân thành công",
        },
        401: {
          description: "Chưa đăng nhập hoặc token không hợp lệ",
        },
      },
    },
  },

  "/QuanLyNguoiDung/TimKiemNguoiDung": {
    get: {
      tags: ["QuanLyNguoiDung"],
      summary: "Tìm kiếm người dùng",
      description: "Tìm kiếm người dùng theo họ tên, email hoặc số điện thoại.",
      parameters: [
        {
          name: "tu_khoa",
          in: "query",
          required: true,
          schema: {
            type: "string",
          },
          example: "Nguyen",
        },
      ],
      responses: {
        200: {
          description: "Tìm kiếm người dùng thành công",
        },
      },
    },
  },

  "/QuanLyNguoiDung/ThemNguoiDung": {
    post: {
      tags: ["QuanLyNguoiDung"],
      summary: "Thêm người dùng",
      description: "Tạo một người dùng mới.",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                email: {
                  type: "string",
                  example: "example@gmail.com",
                },
                password: {
                  type: "string",
                  example: "Example@123",
                },
                ho_ten: {
                  type: "string",
                  example: "Nguyen Van A",
                },
                so_dt: {
                  type: "string",
                  example: "0901234567",
                },
                loai_nguoi_dung: {
                  type: "string",
                  example: "KhachHang",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "Thêm người dùng thành công",
        },
        400: {
          description: "Thêm người dùng thất bại",
        },
      },
    },
  },

  "/QuanLyNguoiDung/CapNhatThongTin/{tai_khoan}": {
    put: {
      tags: ["QuanLyNguoiDung"],
      summary: "Cập nhật thông tin người dùng",
      description: "Cập nhật thông tin của một người dùng.",
      parameters: [
        {
          name: "tai_khoan",
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
          "application/json": {
            schema: {
              type: "object",
              properties: {
                ho_ten: {
                  type: "string",
                  example: "Nguyen Van B",
                },
                email: {
                  type: "string",
                  example: "newemail@gmail.com",
                },
                so_dt: {
                  type: "string",
                  example: "0912345678",
                },
                loai_nguoi_dung: {
                  type: "string",
                  example: "KhachHang",
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Cập nhật thông tin thành công",
        },
        400: {
          description: "Cập nhật thông tin thất bại",
        },
      },
    },
  },

  "/QuanLyNguoiDung/XoaNguoiDUng/{tai_khoan}": {
    delete: {
      tags: ["QuanLyNguoiDung"],
      summary: "Xóa người dùng",
      description: "Xóa một người dùng.",
      parameters: [
        {
          name: "tai_khoan",
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
          description: "Xóa người dùng thành công",
        },
        400: {
          description: "Xóa người dùng thất bại",
        },
      },
    },
  },
};
