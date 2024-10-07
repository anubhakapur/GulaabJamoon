const experienceModel = require("../models/experienceModel");

const activeTripsCountController = async(req,res) => {
    try{
        const count = await experienceModel.countDocuments({ status: 'Live' });
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

module.exports = activeTripsCountController