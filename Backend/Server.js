const app = require("./App");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

//unhandled uncaught eception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("shutting down server due to uncaughtException");
  server.close(() => {
    process.exit(1);
  });
});
//config
dotenv.config({ path: "Backend/config/config.env" });

//connect DB
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

//unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("shutting down server due to unhandledRejection");
  server.close(() => {
    process.exit(1);
  });
});
