const bookingModel = require("../models/bookingModel");

const activeBookingsController = async(req,res) => {

    try {
        const currentDate = new Date();
        const activeBookings = await bookingModel.find({
            date: { $gte: currentDate },
            status: 'active'
    }).sort({ bookingDate: 1 }).populate('experienceId').populate('userId','-password').lean();//Remove password from the user object

    
    const formattedBookings = activeBookings.map(booking => ({
      id: booking._id,
      name: booking.userId.name,
      email: booking.userId.email,
      mobile: booking.userId.phoneNumber,
      date: booking.date,
      experienceBooked: {
        name: booking.experienceId.name,
        url: booking.experienceId.url,
        id: booking.experienceId._id
      }
    }));

    console.log(formattedBookings);
    res.json({
        data: formattedBookings,
        success: true,
        error: false
    });
  } catch (error) {
    console.error('Error fetching active bookings:', error);
    res.status(500).json({ 
        message: 'Error fetching active bookings',
        success: false,
        error: true
    });
  }
}

module.exports = activeBookingsController;