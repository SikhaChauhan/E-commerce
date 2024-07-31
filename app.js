const express = require('express');
const app = express();
const port = 1212;
const path = require('path');
const seedDB = require('./seed');
const ejsMate = require('ejs-mate');
const productRoutes = require('./routes/product'); // harr incoming request pe chalega


// DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/E-Commerce').then(()=>{
    console.log("Db connected");
}).catch((err)=>{
    console.log("Db not connected");
    console.log(err);
});


app.engine('ejs', ejsMate); // engine define kara hai jo ejs file ko read krega

// view engine (default present in express) kis type ki file dekh paa raha hai
//  (ejs(templating language))
app.set('view engine', 'ejs');


app.set('views', path.join(__dirname, 'views')); // Views folder is joined

app.use(express.static(path.join(__dirname,'public'))); // Public folder is joined
app.use(express.urlencoded({extended: true}));

// Seeding database
// seedDB();

app.use(productRoutes); // so that harr incoming request ke liye check kara jaaye

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});