const userModel = require('../models/UserModel');

const userSignUpController = async(req,res) => {

    try{
        const {name,email,phoneNumber,dateOfBirth,gender} = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            throw new Error('User already exists')
        }


        // Create new user
        const newUser = new userModel({
            name,
            email,
            phoneNumber,
            dateOfBirth,
            gender
        })

        // Save new user
        await newUser.save();

        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
            success: true,
            error: false
        })
    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }

}

module.exports = userSignUpController;