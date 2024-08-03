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
    },
    // this is done in order to differentiate the reviews of one product from the other
    reviews:[
        {
            // type is defined of object id which is of other model
            type: mongoose.Schema.Types.ObjectId,
            // which Model/Schema we are talking about
            ref: 'Review'
        }
    ]
});

let Product = mongoose.model('Product', productSchema);
module.exports = Product;