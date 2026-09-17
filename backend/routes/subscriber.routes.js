const express = require("express");

const {
  createSubscriber,
  getSubscribers,
} = require("../controllers/subscriber.controller");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public - newsletter subscribe
router.post("/", createSubscriber);

// Admin only - subscribers dekh sakta hai
router.get("/", protect, adminOnly, getSubscribers);

module.exports = router;