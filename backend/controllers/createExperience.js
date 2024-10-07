const experienceModel = require("../models/experienceModel")

const createExperienceController = async(req,res) => {
    try{
        // const {name,description,images,location,startDate,endDate,startTime,duration,overview,highlights,cancellationPolicy,knowBeforeYouGo} = req.body
        // console.log("experience",req.body)
        const experience = new experienceModel(req.body)
           
        await experience.save()

        res.status(200).json({
            message : 'Experience created successfully',
            success : true,
            error : false
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

module.exports = createExperienceController