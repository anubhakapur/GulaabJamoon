const userModel = require("../models/userModel");


const signUpGoogleController = async(req,res) => {
    try{
        const {email} = req.body;
        const user = await userModel.findOne({email});
        if(user){
            return res.status(500).json({
                message:"User already exists",
                success:false,
                error:true
            })
        }

        const newUser = new userModel({
            email : email,
            isVerified:true
        })

        await newUser.save();

        res.status(200).json({
            message:"User created",
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

module.exports = signUpGoogleController;