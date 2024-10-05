const bookingModel = require("../models/bookingModel");

const bookingController = async(req,res) => {
    try {
        console.log("bookings",req.body);
        const booking = new bookingModel({
             userId : req.userId,
            ...req.body
        });

        console.log("booking",booking);
        await booking.save();
        res.json({ 
            bookingId: booking._id, 
            success: true,
            error: false,
            message: 'Booking created successfully'
        });

  } catch (error) {
    res.status(500).json({ 
        error: 'Booking creation failed',
        success: false,
        error: true
    });
  }
} 


module.exports = bookingController