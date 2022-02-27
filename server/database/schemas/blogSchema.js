/**
 * import mongoose
 */
const mongoose = require('mongoose');


/**
 * Create a blog Schema
 */
const blogSchema = new mongoose.Schema({
    blogContent: {
        type: String,
        required: true,
    }
});

/**
 * Export the Blog Schema
 */
module.exports = {
    blogSchema
};