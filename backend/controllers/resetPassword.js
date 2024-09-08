const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

const resetPasswordController = async(req,res) => {

    const { email, oldPassword, newPassword } = req.body;

  try {
    // Find the user by email
    let user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found',
        success: false, 
        error: true
    });
    }

    // Check if the old password is correct
    const isMatch = await bcrypt.compare(oldPassword, user.password);

    if (!isMatch) {
      return res.status(400).json({ 
        message: 'Invalid old password', 
        success: false,
        error: true
    });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.json({ 
        message: 'Password reset successful',
        success: true,
        error: false
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ 
        message: 'Server error',
        success: false,
        error: true
    });
}

}

module.exports = resetPasswordController;