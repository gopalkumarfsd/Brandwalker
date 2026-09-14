const express = require("express");

const {
  createInquiry,
  getInquiries,
} = require("../controllers/inquiry.controller");

const router = express.Router();

router.post("/", createInquiry);

router.get("/", getInquiries);

module.exports = router;           