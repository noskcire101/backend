const userAuth= require('../models/userAuthModel')

//login user
const loginUser = async (req, res) => {
  res.status(200).json({mssg: 'login user'});      
}

//register user
const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await userAuth.signup(email, password);
        res.status(200).json({email, user});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = {
    loginUser,
    registerUser
}