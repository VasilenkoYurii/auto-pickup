const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://yurii:MiN2BtmIt9LoYgOV@cluster0.afdhmrr.mongodb.net/db-cars?retryWrites=true&w=majority";
const PORT = 3001;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
