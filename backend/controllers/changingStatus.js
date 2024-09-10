const experienceModel = require("../models/experienceModel");


const changingStatusController = async (req, res) => {
    try {
        const { id, status } = req.body;
        const experience = await experienceModel.findById(id);
        if (!experience) {
            return res.status(404).json({
                message: "Experience not found",
                success: false,
                error: true
            })
        }

        experience.status = status;
        await experience.save();

        res.status(200).json({
            message: "Experience status updated",
            success: true,
            error: false
        })

    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Server error",
            success: false,
            error: true
        })
    }
}

module.exports = changingStatusController;