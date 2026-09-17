const Subscriber = require("../models/Subscriber");

const createSubscriber = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existingSubscriber = await Subscriber.findOne({
      email: normalizedEmail,
    });

    if (existingSubscriber) {
      return res.status(409).json({
        success: false,
        message: "Email is already subscribed",
      });
    }

    const subscriber = await Subscriber.create({
      email: normalizedEmail,
    });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
      data: subscriber,
    });
  } catch (error) {
    console.error("Subscriber Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      data: subscribers,
    });
  } catch (error) {
    console.error("Get Subscribers Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

// Admin only - subscriber delete
const deleteSubscriber = async (req, res) => {
  try {
    const { id } = req.params;

    const subscriber = await Subscriber.findByIdAndDelete(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (error) {
    console.error("Delete Subscriber Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  createSubscriber,
  getSubscribers,
  deleteSubscriber,
};