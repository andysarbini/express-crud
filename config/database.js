// get the client
const mysql = require('mysql2');

// create the connection to database
const dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
    
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "express_crud"
});

module.exports = dbPool.promise();