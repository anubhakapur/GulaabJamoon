const userModel = require("../models/userModel");

const userSignUpTwoController = async (req, res) => {
  try {
    const {name, phone,dob, gender,occupation, email } = req.body;

    let user = await userModel.findOne({email});
    if (!user) {
      return res.status(400).json({ 
            message: 'User not found', 
            success: false,
            error: true
        });
    }

    let otherUser = await userModel.findOne({phone});
    if(otherUser){
      return res.status(400).json({
        message: 'Phone number already exists',
        success: false,
        error: true
      })
    }

    if (!user.isVerified) {
      return res.status(400).json({ 
            message: 'Email not verified', 
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
    res.status(200).json({ 
        message: 'User details updated successfully',
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
