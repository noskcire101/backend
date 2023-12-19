require('dotenv').config();

const express = require("express");
const mongoose = require('mongoose');
const personDataRoutes = require('./routes/personDataRoutes');
const userAuthRoutes = require('./routes/userAuthRoutes');

//express app
const app = express();


// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/person',personDataRoutes)
app.use('/api/user',userAuthRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for requests
    app.listen(process.env.PORT, () => {
        console.log("Server is listening on port", process.env.PORT);
    });
})
.catch((err)=>{
    console.log(err);
})
