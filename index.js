require("dotenv").config();
const express = require("express");

const app = express();
const connectDB = require("./connect/db");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");

app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
const port = process.env.PORT || 8800;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
