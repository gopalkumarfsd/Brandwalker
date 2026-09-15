
const Subscriber = require("../models/Subscriber");

 const createSubscriber= async(req, res) => {
    try{
     const {email} = req.body;

        if(!email){
          return res.status(400).json({
            success: false,
            message: "Email is required",
          });
        }

        const existingSubscriber = await Subscriber.findOne({ email });

        if (existingSubscriber) {
        return res.status(409).json({
        success: false,
        message: "Email is already subscribed",
      });
     }

       const subscriber = await Subscriber.create({
      email,
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
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });

    }
 };

 module.exports = {
  createSubscriber,
  getSubscribers,
};   
