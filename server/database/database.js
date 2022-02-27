/**
 * Database connection file
 * Importing the mongoose
 */
const mongoose = require('mongoose');

/**
 * Import the database models
 */
const {Blog, User} = require('./models/index');
const config = require('../config/index');

/**
 * Database URI variable
 */
const dburi = config.DBURI;


/**
 * 
 */
const db = mongoose.connect(dburi, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000
}).then( ()=>{
    console.log("Database connected successfully!");
}). catch((err) =>{
    console.error({message: err})
});

/**
 * Database Events
 */
// db.open('connected', ()=>{
//     console.log("Databaseconnection created successfully!");
// })

/**
 * Connect models to database
 */
const blog = db.Blog;
const user = db.User;

/**
 * Export the database
 */
module.exports = {
    blog,
    user
};