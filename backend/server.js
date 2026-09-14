const express = require("express");
const mongoose = require("mongoose");
const cors= require ("cors");
require("dotenv").config();

const inquiryRoutes = require("./routes/inquiry.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Brandwalker API is running",
  });
});

app.use("/api/inquiries", inquiryRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(process.env.PORT, () => {
      console.log(
        `Server running on http://localhost:${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB Connection Error:", error);
  });