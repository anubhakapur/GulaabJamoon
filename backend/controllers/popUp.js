const sendEmail = require("../utils/sendEmail");


const popUpController = async(req,res) => {
    const {name,phoneNumber,message,expectingCallback} = req.body;

    if(!name || !phoneNumber || !message){
        return res.status(400).json({
            message:"All fields are required",
            success:false,
            error:true
        })
    }

    // Here you would typically send the form data to your server
    await sendEmail(email,'Thanks for Submitting your Pop Up Inquiry','We will get back to you shortly');
    await sendEmail('navishgoyal51@gmail.com','New Pop Up Inquiry',`
        Name: ${name} <br>
        Phone Number: ${phoneNumber} <br>
        Message: ${message} <br>
        Expecting Callback: ${expectingCallback} <br>
        `);

    res.status(200).json({
        message:"Pop Up Inquiry Submitted",
        success:true,
        error:false
    })

}

module.exports = popUpController;

