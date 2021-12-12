const express = require("express");
const app = express();
// require("dotenv/config");
// const api = process.env.API_URL;
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
// const authJwt = require("./helpers/jwt");
// const errorHandler = require("./helpers/error-handler");

app.use(cors());
app.options("*", cors());

//Middleware
app.use(express.json());
app.use(morgan("tiny"));
// // app.use(authJwt());
// app.use(errorHandler);

//Routes
const commentRoutes = require("./routes/Comment");
const newsRoutes = require("./routes/News");
const userRoutes = require("./routes/User");
const savedRoutes = require("./Routes/Saved");

app.use("/news", newsRoutes);
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);
app.use("/saved", savedRoutes);

// Database Connection
mongoose
  .connect(
    "mongodb+srv://AlmasT10:Qwerty_0101@cluster0.oak3m.mongodb.net/dexNews?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDb connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running at port:3000");
});
