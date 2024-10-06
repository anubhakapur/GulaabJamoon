const experienceModel = require("../models/experienceModel");

const getParticularExperienceController = async (req, res) => {
    const {tripName} = req.params;
    console.log("url",tripName)

    try{
        const experience = await experienceModel.findById(tripName);

    if (!experience) {
        return res.status(404).json({ 
            error: true,
            success: false, 
            message: "Experience not found" 
        });
    }

    return res.json({
        error: false,
        success: true,
        data: experience
    });

}
    catch(error){
        console.log(error)
        res.status(500).json({
            error: true,
            success: false,
            message: "Internal server error"
        });
    }   


    // const experience = experienceModel.findOne({ url})

    // if (!experience) {
    //     return res.status(404).json({ 
    //         error: true,
    //         success: false, 
    //         message: "Experience not found" 
    //     });
    // }

    // res.json({ 
    //     error: false,
    //     success: true,
    //     data: experience 
    // });
}

module.exports = getParticularExperienceController;

