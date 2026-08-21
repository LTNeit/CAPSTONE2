export const testMiddleware = (req, res, next) => {
  console.log("middleware 1");

  const resultA = "Kết quả A";
  res.payload = resultA;
  next();
};
