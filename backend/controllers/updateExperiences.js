const experienceModel = require("../models/experienceModel");


const updateExperiencesController = async(req,res) => {

    try{
    const updateData = req.body;
    const experienceDoc = await experienceModel.findById(updateData.id)
    
    if(!experienceDoc){
        return res.status(404).json({
            message:"Experience not found",
            success:false,
            error:true
        })
    }

    experienceDoc.set(updateData);
    await experienceDoc.save();

    res.status(200).json({
        message:"Experience Updated",
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


module.exports = updateExperiencesController;