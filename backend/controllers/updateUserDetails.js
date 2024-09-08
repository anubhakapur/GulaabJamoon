const userModel = require("../models/userModel")

const updateUserController = async(req,res) => {
    try{
        const sessionUser = req.userId

        const {name,mobile,occupation} = req.body

        const payload = {
            ...( name && { name : name}),
            ...( mobile && { phoneNumber : mobile}),
            ...( occupation && { occupation : occupation}),
        }

        const user = await userModel.findById(sessionUser)

        const updateUser = await userModel.findByIdAndUpdate(sessionUser,payload)
        
        res.json({
            data : updateUser,
            message : "User Updated",
            success : true,
            error : false
        })
    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = updateUserController