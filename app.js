const express = require('express');
const app = express();
const port = 1212;
const path = require('path');


// DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-Commerce').then(()=>{
    console.log("Db connected");
}).catch((err)=>{
    console.log("Db not connected");
    console.log(err);
});


// engine setup
app.set('view engine', 'ejs');
// Views folder is joined
app.set('views', path.join(__dirname, 'views'));
// Public folder is joined
app.use(express.static(path.join(__dirname,'public')));






app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});