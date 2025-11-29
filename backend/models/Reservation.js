const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    date: {
        type: String, // Keeping as string to match frontend 'YYYY-MM-DD'
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    guests: {
        type: Number,
        required: true,
    },
    specialRequest: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Declined'],
        default: 'Pending',
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Reservation', reservationSchema);
