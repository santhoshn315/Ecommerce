const app = require("./App");
const connectDatabase = require("./config/database");
const dotenv = require("dotenv");

//config
dotenv.config({ path: "Backend/config/config.env" });

//connect DB
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
