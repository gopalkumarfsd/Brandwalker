const express = require("express");

const {
  createSubscriber,
  getSubscribers,
  deleteSubscriber,
} = require("../controllers/subscriber.controller");

const {
  protect,
  adminOnly,
} = require("../middleware/authMiddleware");

const router = express.Router();

// Public - newsletter subscribe
router.post("/", createSubscriber);

// Admin only - subscribers 
router.get("/", protect, adminOnly, getSubscribers);

// Admin only -  subscriber delete
router.delete("/:id", protect, adminOnly, deleteSubscriber);


module.exports = router;