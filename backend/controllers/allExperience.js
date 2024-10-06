const experienceModel = require("../models/experienceModel")


const allExperienceController = async (req, res) => {
    try{
        const experience = await experienceModel.find()
        console.log(experience)
        res.status(200).json({
            message : 'Experience fetched successfully',
            success : true,
            error : false,
            data : experience
        })
    }
    catch(err){
        res.status(500).json({
            message : 'Server error',
            success : false,
            error : true
    })
}

}

module.exports = allExperienceController