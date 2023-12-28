const userAuth= require('../models/userAuthModel')
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
  const {email, password} = req.body;

  try {
    const user = await userAuth.login(email, password);

    //create token
    const token = createToken(user._id);

    res.status(200).json({email, token});
  } catch (error) {
    res.status(400).json({error: error.message});
  }
    
}

//register user
const registerUser = async (req, res) => {
    const {email, password} = req.body;

    try{
        const user = await userAuth.signup(email, password);
        //create token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    }catch(err){
        res.status(400).json({error: err.message});
    }
}

module.exports = {
    loginUser,
    registerUser
}