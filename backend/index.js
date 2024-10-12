require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes/index");
const authRoutes = require("./routes/authRoutes");
const connectdb = require("./config/db");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
// const Razorpay = require("razorpay");

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(
  session({
    secret: "YOUR SECRET KEY",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, "dist")));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", router);
app.use("/auth", authRoutes);
app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
  res.setHeader("Content-Type", "text/html");
});
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_SECRET_KEY,
// });

PORT = 80 || process.env.PORT;

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

connectdb().then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
