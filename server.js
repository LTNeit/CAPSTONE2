import express from "express";
import router from "./src/routers/root.router.js";
import { appError } from "./src/common/helpers/appError.helper.js";
import cookieParser from "cookie-parser";
import { logAPI } from "./src/common/middleware/log-api.middleware.js";
import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./src/common/swagger/init.swagger.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static("public"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api", router);
app.use(appError);
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
