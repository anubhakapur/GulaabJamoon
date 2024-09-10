const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');

const userSignUpTwoController = async (req, res) => {
  try {
    const {name, phone,dob, gender,occupation, email } = req.body;
    console.log("email",email)

    let user = await userModel.findOne({email});
    if (!user) {
      return res.status(400).json({ 
            message: 'User not found', 
            success: false,
            error: true
        });
    }

    if (!user.isVerified) {
      return res.status(400).json({ 
            message: 'Email not verified', 
            success: false,
            error: true
        });
    }

    const phoneExists = await userModel.findOne({ phoneNumber: phone, _id: { $ne: user._id } });
    if (phoneExists) {
      return res.status(400).json({
        message: 'Phone number already exists',
        success: false,
        error: true
      });
    }

    user.name = name;
    user.dateOfBirth = dob;
    user.phoneNumber = phone;
    user.occupation = occupation;
    user.gender = gender;

    await user.save();

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
        message: 'Sign Up successful',
        success: true,
        error: false
     });

  } catch (err) {
    res.status(500).json({ 
        message: 'Server error',
        success: false,
        error: true
    });
  }
};

module.exports = userSignUpTwoController;
