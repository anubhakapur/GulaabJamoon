const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const loginGoogleController = async(req,res) => {

    try{
    const {email} = req.body;
    const user = userModel.findOne({email})
    if(!user){
        return res.status(404).json({
            message:"User not found",
            success:false,
            error:true
        })
    }

    const tokenData = {
        _id : user._id,
        email : user.email
    }
    // Create a JWT token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    const tokenOptions = {
        httpOnly: true,
        secure: true
    }

    res.cookie("token",token,tokenOptions).json({ 
        data: token,
        role: user.role,
        message: 'Sign In successful',
        success: true,
        error: false
    });
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

module.exports = loginGoogleController;