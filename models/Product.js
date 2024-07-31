const mongoose = require('mongoose');
const {Schema} = mongoose;

// Schema is created
const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    img:{
        type: String,
        trim: true,
        required: true
    },
    price:{
        type: Number,
        min: 0,
        required: true
    },
    desc: {
        type: String,
        trim: true
    }
});

let Product = mongoose.model('Product', productSchema);
module.exports = Product;