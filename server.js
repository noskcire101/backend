const express = require("express");

//express app
const app = express();

//listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
});