const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');

const userSignInController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the email exists in the database
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ 
        message: 'User does not exists',
        success: false,
        error: true
    });
}

    // Compare the provided password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ 
        message: 'Wrong Password', 
        success: false,
        error: true
    });
}

    const tokenData = {
        _id : user._id,
        email : user.email
    }
    // Create a JWT token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    const tokenOptions = {
        httpOnly: true,
        secure: true
    }

    // Send the token back to the client
    res.cookie("token",token,tokenOptions).json({ 
        data: token,
        role: user.role,
        message: 'Sign in successful',
        success: true,
        error: false
     });

  } catch (err) {

    console.error(err);
    res.status(500).json({ 
        message: 'Server error',
        success: false,
        error: true

    });
  }
};


module.exports = userSignInController;