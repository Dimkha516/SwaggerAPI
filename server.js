const express = require('express');
const connectDB = require('./Connection/connect');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT;


// CONNEXION TO CLUSTER:
connectDB();


app.listen(port, () => {
    console.log("running on port: " + port);
    
})