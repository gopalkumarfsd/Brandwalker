const express = require("express");

const {
  createSubscriber,
  getSubscribers,
} = require("../controllers/subscriber.controller");

const router = express.Router();

router.post("/", createSubscriber);
router.get("/", getSubscribers);

module.exports = router;