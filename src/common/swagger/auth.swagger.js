export const authSwagger = {
  "/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "Đăng nhập",
      description: "Đăng nhập vào hệ thống và nhận access token.",
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
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Đăng nhập thành công",
        },
        400: {
          description: "Thông tin đăng nhập không đúng",
        },
      },
    },
  },

  "/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "Đăng ký tài khoản",
      description: "Tạo tài khoản người dùng mới.",
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
                fullname: {
                  type: "string",
                  example: "Nguyen Van A",
                },
                age: {
                  type: "integer",
                  example: 20,
                },
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Đăng ký thành công",
        },
        400: {
          description: "Đăng ký thất bại",
        },
      },
    },
  },

  "/auth/forgot-password": {
    post: {
      tags: ["Auth"],
      summary: "Quên mật khẩu",
      description: "Thực hiện chức năng quên mật khẩu.",
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
              },
            },
          },
        },
      },
      responses: {
        200: {
          description: "Thực hiện yêu cầu thành công",
        },
        400: {
          description: "Bad request",
        },
      },
    },
  },

  "/auth/refresh-token": {
    post: {
      tags: ["Auth"],
      summary: "Làm mới access token",
      description: "Sử dụng refresh token để tạo access token mới.",
      responses: {
        200: {
          description: "Refresh token thành công",
        },
        400: {
          description: "Refresh token không hợp lệ",
        },
      },
    },
  },
};
