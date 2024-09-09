const experienceModel = require("../models/experienceModel");


const getExperienceController = async(req,res) => {
    try{
        const {id} = req.params;
        const experience = await experienceModel.findById(id);
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
        console.error(err);
        res.status(500).json({
            message:"Server error",
            success:false,
            error:true
        })
    }
}

module.exports = getExperienceController;