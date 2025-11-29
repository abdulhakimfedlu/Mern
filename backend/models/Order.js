const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    type: {
        type: String,
        enum: ['cafe', 'delivery'],
        required: true,
    },
    status: {
        type: String,
        enum: ['Pending', 'Served', 'Out for Delivery', 'Delivered', 'Cancelled'],
        default: 'Pending',
    },
    // Cafe specific
    table: {
        type: String,
    },
    // Delivery specific
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    paymentScreenshot: {
        type: String,
    },
    // Common
    customer: {
        type: String,
        required: true,
    },
    items: [{
        itemId: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
        },
        image: {
            type: String,
        },
        category: {
            type: String,
        },
    }],
    specialRequest: {
        type: String,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Order', orderSchema);
