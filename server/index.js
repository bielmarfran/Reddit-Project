const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
require("dotenv").config();
var cloudinary = require("cloudinary").v2;

var production = false;
if (process.env.PORT !== undefined) {
  production = true;
}

const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { createTokens, validateToken } = require("./Middleware/jtw");
const { sequelize, User, Post, Comment } = require("./models");

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.options(
  "*",
  cors({
    credentials: true,
    origin: production
      ? "https://thirsty-villani-f5cdd2.netlify.app"
      : "http://localhost:3000",
  })
);

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    production
      ? "https://thirsty-villani-f5cdd2.netlify.app"
      : "http://localhost:3000"
  );
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Origin"
  );

  next();
});

// Routers

const postRouter = require("./routes/posts");
app.use("/posts", validateToken, postRouter);

const commentRouter = require("./routes/comment");
app.use("/comment", validateToken, commentRouter);

const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

const profileRouter = require("./routes/profile");
app.use("/profile", validateToken, profileRouter);

app.listen(process.env.PORT || PORT, async () => {
  console.log(`its alive on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log("Database Connected");
});

//app.use("/public", express.static("./public"));
