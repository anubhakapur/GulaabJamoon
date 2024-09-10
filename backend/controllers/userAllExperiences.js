const experienceModel = require("../models/experienceModel")


const userAllExperiencesController = async (req, res) => {
    try{
        const experience = await experienceModel.find({status:"Live"})
        if(!experience){
            return res.status(404).json({
                message:"Experience not found",
                success:false,
                error:true
            })
        }

        res.status(200).json({
            data:experience,
            success:true,
            error:false
        })

    }
    catch(err){
        res.status(500).json({
            message:"Server error",
            success:false,
            error:true
        })
    }
}

module.exports = userAllExperiencesController;