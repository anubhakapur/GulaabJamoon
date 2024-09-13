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

app.use(
  cors({
    origin: "http://localhost:8080/",
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
app.use(express.static(path.join(__dirname, "dist")));
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
app.use("/api", router);
app.use("/auth", authRoutes);

PORT = 8080 || process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

connectdb().then(() => {
  console.log("Connected to database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

app.get("*", (_, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});
