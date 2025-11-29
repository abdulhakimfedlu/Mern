const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    badge: {
        type: String,
        enum: ['Best Seller', 'Special', 'New', 'Chef\'s Choice', 'Limited', ''],
        default: ''
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
