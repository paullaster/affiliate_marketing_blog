/**
 * Import mongoose
 */
const mongoose = require('mongoose');

/**
 * Import Blog Schema
 */
const blogSchema = require('../schemas/blogSchema');

/**
 * Creating blog model
 */
const Blog = mongoose.model("Blog", blogSchema);

/**
 * Export Blog model
 */
module.exports = {
    Blog
}