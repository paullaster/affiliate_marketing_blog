/**
 * Import mongoose ORM
 */
const mongoose = require('mongoose');

/**
 * Create new Schema
 */

const userSchema = new mongoose.Schema({
    email: {
        require: true,
        type: String,
    },
    password: {
        type: String,
        require: true,
    }
});

module.exports = {
    userSchema
};