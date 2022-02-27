/**
 * Import libraries
 */
const express = require('express');



/**
 * App instance
 */
const app = express();

/**
 * Import app internal modules
 */
const config = require('./config/index');
const db = require('./database/database');
/**
 * App settings
 */


/**
 * App variables
 */
const PORT = config.PORT;

/**
 * Testing APIs
 */
app.get('/', async(req,res,next) =>{
    res
    .status(200)
    .send({
        message: "Hello world from test API"
    });
});

/**
 * Starting server
 */
app.listen(PORT, () =>{
    console.log(`Server running on PORT : ${PORT}`);
})