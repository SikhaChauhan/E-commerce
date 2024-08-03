const mongoose = require('mongoose');
const {Schema} = mongoose;

// Schema is created
const reviewSchema = new Schema({
    rating: {
        type: Number,
        min: 0,
        max: 5
    },
    comment: {
        type: String,
        trim: true
    }
});

let Review = mongoose.model('Review', reviewSchema);
module.exports = Review;