const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      expoName,
      stallSize,
      message,
    } = req.body; 

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    const inquiry = await Inquiry.create({
      name,
      email,
      phone,
      expoName,
      stallSize,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

const getInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: inquiries, 
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    }); 
  }
};

module.exports = {
  createInquiry,
  getInquiries,
};