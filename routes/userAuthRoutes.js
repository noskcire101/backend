const express = require('express');
const {loginUser, registerUser} = require('../controllers/userAuthController');

const router = express.Router();

//login routes
router.post('/login', loginUser)

//register routes
router.post('/register', registerUser)


module.exports = router