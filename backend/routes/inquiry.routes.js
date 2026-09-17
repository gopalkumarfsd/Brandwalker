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

// Admin only - inquiries
router.get("/", protect, adminOnly, getInquiries);

// Admin only - inquiry delete 
router.delete("/:id", protect, adminOnly, deleteInquiry);

module.exports = router;