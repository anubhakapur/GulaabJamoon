const sendEmail = require("../utils/sendEmail");


const hostExperienceController = async(req,res) => {
    try{
        const {name,email,phone,experienceIdea,experienceDescription,estPeople} = req.body;

        if(!name || !email || !phone || !experienceIdea || !experienceDescription || !estPeople){
            return res.status(400).json({
                message:"All fields are required",
                success:false,
                error:true
            })
        }

        await sendEmail(email,'Thanks for Submitting your Host Experience Idea','We will get back to you shortly');
        await sendEmail('navishgoyal51@gmail.com','New Host Experience Idea',`
            Name: ${name} <br>
            Email: ${email} <br>
            Phone: ${phone} <br>
            Experience Idea: ${experienceIdea} <br>
            Experience Description: ${experienceDescription} <br>
            Estimated Number of People: ${estPeople} <br>
            `);

        res.status(200).json({
            message:"Host Experience Idea Submitted",
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

module.exports = hostExperienceController;