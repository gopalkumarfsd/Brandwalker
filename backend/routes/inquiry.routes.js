const express = require("express");

const {
  createInquiry,
  getInquiries,
  deleteInquiry,
} = require("../controllers/inquiry.controller");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public - website visitors can submit inquiry
router.post("/", createInquiry);

// Admin only - inquiries dekh sakta hai
router.get("/", protect, adminOnly, getInquiries);

// Admin only - inquiry delete kar sakta hai
router.delete("/:id", protect, adminOnly, deleteInquiry);

module.exports = router;