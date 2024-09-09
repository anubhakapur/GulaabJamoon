const sendEmail = require('../utils/sendEmail');

const corporateController = async(req,res) => {

    try{
    const {name,email,companyName,participants,budget,tripDates,findUs,moreInfo} = req.body;

    if(!name || !email || !companyName || !participants || !budget || !tripDates || !findUs){
        return res.status(400).json({
            message:"All fields are required",
            success:false,
            error:true
    })
    }

    await sendEmail(email,'Thanks for Submitting your Corporate Inquiry','We will get back to you shortly');
    await sendEmail(process.env.ADMIN_EMAIL,'New Corporate Inquiry',

    `Name: ${name} <br>
    Email: ${email} <br>
    Company Name: ${companyName} <br>
    Number of Participants: ${participants} <br>
    Trip Budget: ${budget} <br>
    Trip Dates: ${tripDates} <br>
    How did you find us: ${findUs} <br>
    More Info: ${moreInfo} <br>
    `);

    res.status(200).json({
        message:"Corporate Inquiry Submitted",
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

module.exports = corporateController;

