const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;


const userAuthSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true
    }
},{timestamps: true})

//static signup methods
userAuthSchema.statics.signup = async function (email, password){

    //validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error('Email is not valid')
    }
    if(!validator.isStrongPassword(password)){
        throw Error('Password not strong enough')
    }

    const isExists = await this.findOne({email});

    if(isExists){
        throw Error('Email already in use');
    }

    //added salt for additional security
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({email, password: hashedPassword});

    return user;
}

//static login methods
userAuthSchema.statics.login = async function (email, password){
    //validation
    if(!email || !password){
        throw Error('All fields must be filled')
    }

    const user = await this.findOne({email});
    if(!user){
        throw Error('Incorrect email');
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
        throw Error('Incorrect password');
    }
    return user
}

module.exports = mongoose.model('userAuth', userAuthSchema)