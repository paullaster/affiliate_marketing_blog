/**
 * Import mongoose
 */
 const mongoose = require('mongoose');

 /**
  * Import user Schema
  */
 const userSchema = require('../schemas/userSchema');
 
 /**
  * Creating user model
  */
 const User = mongoose.model("User", userSchema);
 
 /**
  * Export User model
  */
 module.exports = {
     User
 };