const bookingModel = require("../models/bookingModel");

const getBookingsController = async(req,res) => {
    try {
        const bookings = await bookingModel.find({ 
            userId: req.userId 
        }).populate('experienceId');
    
    console.log("bookingsParticular",bookings);    
    res.json({
        data: bookings,
        success: true,
        error: false,
    });

  } catch (error) {
    res.status(500).json({ 
        message: 'Server error',
        success: false,
        error: true
    });
  }
}

module.exports = getBookingsController