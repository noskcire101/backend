require('dotenv').config();

const express = require("express");

//express app
const app = express();

// routes
app.get('/',(req, res) => {
    res.json({'Welcome to the app'});
});

//listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 4000!!");
});