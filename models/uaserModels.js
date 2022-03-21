const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true,
    trim: true
  },
  password:{
    type: String,
    required: true,
    trim: true,
    validate(value){
      if(value.length < 6 || value.includes('password')){
        throw new Error('Invalid password')
      }
    }
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value){
      if(!validator.isEmail(value)){
        throw new Error('Email is invalid')
      }
    }
  },
  country:{
    type: String,
    required: true,
    trim: true
  },
  role:{
    type: String,
    required: true
  }
})

const User = mongoose.model('User', userSchema);
module.exports = User;