const bookingModel = require("../models/bookingModel");

const bookingsCountController = async(req,res) => {
    try{
        const count = await bookingModel.countDocuments({ experienceId: req.params.experienceId });
        res.json({ 
            data: { count },
            success: true, 
            error: false
        });
    }
    catch(err){
        res.status(500).json({
            message : 'Server error',
            success : false,
            error : true
    })

}
}

module.exports = bookingsCountController