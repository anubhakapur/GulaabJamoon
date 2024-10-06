const bookingModel = require("../models/bookingModel");
const experienceModel = require("../models/experienceModel");
const userModel = require("../models/userModel");

const userDisplayAdminOnlyController = async(req,res) => {
 try {
    
    const users = await userModel.find().lean();
    const bookings = await bookingModel.find().lean();
    const experiences = await experienceModel.find().lean();

    const experienceMap = new Map(experiences.map(exp => [exp._id.toString(), exp.name]));

    const usersWithBookings = users.map(user => {
      const userBookings = bookings.filter(booking => booking.userId.toString() === user._id.toString());
      const experienceNames = userBookings.map(booking => experienceMap.get(booking.experienceId.toString()))
      .filter(Boolean)
      .join(", ");

      return {
       _id: user._id,
        name: user.name,
        email: user.email,
        phoneNumber: user.phoneNumber,
        experienceBooked: experienceNames
      };
    });

    console.log(usersWithBookings);

    res.json({
        data: usersWithBookings,
        success: true,
        error: false
    });
  } catch (error) {
    res.status(500).json({ 
        message: "Internal server error",
        success: false,
        error: true
    });
  }
}

module.exports = userDisplayAdminOnlyController;