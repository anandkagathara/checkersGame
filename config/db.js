const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CheckerApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("Database is Connected");
});
mongoose.connection.on("error", (e) => {
  console.log("Database is Not Connected", e);
});
