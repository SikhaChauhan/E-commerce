const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); // mini instance


// to show all the products
router.get('/products', async (req, res)=>{

    // saare products dekhne k liye find({}) kara aur usko store kar diya
    //  ek variable mein aur uss variable ko send krdiya index page pe aur display kardiya
    let products = await Product.find({});

    // model k Product.js mein se data in the form of object send kar rahe hain
    //  taaki show kr paaye.
    res.render('products/index', {products});
})


// to show form for the new product
router.get('/products/new', (req,res)=>{
    res.render('products/new');
});

// to add new product
router.post('/products', async (req,res)=>{
    // submit karne pe saara data body mein milega
    let {name, img, price, desc} = req.body; // to access data from request body
    await Product.create({name, img, price, desc}); // to create new product mongoose method is used
    res.redirect('/products'); // get request on /products to display the newly added item
});

router.get('/products/:id', async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/show', {foundProduct});
});


router.get('/products/:id/edit', async (req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('products/edit', {foundProduct});
})

module.exports = router;