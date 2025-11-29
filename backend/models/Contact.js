const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        default: () => new Date().toISOString().split('T')[0],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Contact', contactSchema);
