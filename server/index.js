const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// const { v2: cloudinary } = require("cloudinary");

const authRoute = require("./routes/auth-route.js");
const userRoute = require("./routes/user-route.js");
const constRoute = require("./routes/constants-route.js");

const connectDB = require("./db/connectMongo.js");

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

// cloudinary.config({
//   cloud_name: process.env.CLOUDNARY_CLOUD_NAME,
//   api_key: process.env.CLOUDNARY_API_KEY,
//   api_secret: process.env.CLOUDNARY_API_SECRET,
// });

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());

// Routes
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/const", constRoute);

app.get("/", (req, res) => {
  res.send("Yes! Server is up and running");
});

// error route
app.use((err, req, res) => {
  res.status(400).json({ message: err.message });
});

// wild route
app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
