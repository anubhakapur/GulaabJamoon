
const userSignInController = async(req,res) => {

    try{
        const {email,phoneNumber} = req.body
    }
    catch(err){
        res.status(500).json({
            message: err.message || err,
            success: false,
            error: true
        })
    }
}

module.exports = userSignInController;